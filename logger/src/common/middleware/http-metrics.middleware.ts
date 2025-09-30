// src/common/middleware/http-metrics.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Counter, Histogram, Registry } from 'prom-client';

@Injectable()
export class HttpMetricsMiddleware implements NestMiddleware {
  private readonly httpRequestCounter: Counter<string>;
  private readonly httpRequestDuration: Histogram<string>;

  constructor(private readonly registry: Registry) {
    this.httpRequestCounter = new Counter({
      name: 'http_requests_total',
      help: 'Total number of HTTP requests',
      labelNames: ['method', 'route', 'status'],
      registers: [this.registry],
    });

    this.httpRequestDuration = new Histogram({
      name: 'http_request_duration_seconds',
      help: 'Duration of HTTP requests in seconds',
      labelNames: ['method', 'route', 'status'],
      buckets: [0.1, 0.3, 0.5, 1, 1.5, 2, 5],
      registers: [this.registry],
    });
  }

  use(req: Request, res: Response, next: NextFunction): void {
    const start = process.hrtime();

    res.on('finish', () => {
      const [seconds, nanoseconds] = process.hrtime(start);
      const durationInSeconds = seconds + nanoseconds / 1e9;

      const route = req.route?.path || req.path || 'unknown';
 console.log(`Request finished: ${req.method} ${route} - Duration: ${durationInSeconds}s`); 
      this.httpRequestCounter.inc({
        method: req.method,
        route,
        status: res.statusCode.toString(),
      });

      this.httpRequestDuration.observe(
        {
          method: req.method,
          route,
          status: res.statusCode.toString(),
        },
        durationInSeconds,
      );
    });

    next();
  }
}
