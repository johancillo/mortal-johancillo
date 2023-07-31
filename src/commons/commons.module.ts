import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import config from './config';
import { HealthcheckController } from './healthchecks/main.healthcheck';

@Module({
  controllers: [HealthcheckController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath: ['.env'],
    }),
  ],
  providers: [],
  exports: [],
})
export class CommonModule {}
