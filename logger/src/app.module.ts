import { Module } from '@nestjs/common';
import { PrometheusController } from '@willsoto/nestjs-prometheus';
import { Response } from 'express';
import { AppLoggerModule } from './modules/logger.module';
import { Controller, Get, Res } from '@nestjs/common';
import { MetricsModule } from './modules/metrics.module';

@Controller()
class MyMetricsController extends PrometheusController {
  @Get('/metrics')
  async getMetrics(@Res({ passthrough: true }) response: Response) {
    return super.index(response);
  }
}

@Module({
  imports: [AppLoggerModule, MetricsModule, ],
  controllers: [MyMetricsController],
})
export class AppModule {}