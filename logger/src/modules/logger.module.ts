import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import pino from 'pino';

const isProd = process.env.NODE_ENV === 'production';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        level: isProd ? 'info' : 'debug',
        transport: isProd
          ? undefined
          : {
              target: 'pino-pretty',
              options: {
                singleLine: false,
                colorize: true,
                translateTime: 'SYS:standard',
                ignore: 'pid,hostname',
                messageFormat: '{msg}'
              },
            },
        timestamp: pino.stdTimeFunctions.isoTime,
        redact: {
          paths: ['req.headers.authorization', 'req.headers.cookie'],
          censor: '[REDACTED]',
        },
        genReqId: (req) =>
          (req.headers['x-request-id'] as string) ?? crypto.randomUUID(),
        serializers: {
          req: (req) => ({
            method: req.method,
            url: req.url,
            id: req.id,
            remoteAddress: req.socket?.remoteAddress,
            remotePort: req.socket?.remotePort,
            headers: req.headers,
          }),
        },
        customProps: (req) => ({
          service: process.env.SERVICE_NAME || 'LoggerService',
          route: req.url,
        }),
      },
    }),
  ],
})
export class AppLoggerModule {} 