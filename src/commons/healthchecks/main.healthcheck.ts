import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthcheckController {
  @Get()
  health() {
    return 'healthy';
  }
}
