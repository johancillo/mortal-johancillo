import { Module } from '@nestjs/common';
import { KombarServiceImpl } from './application/services/kombar.services';
import { KombatService } from './domain/ports/services/iKombat.services';
import { FightsControllers } from './infrastructure/adapters/http/fight.controller';
@Module({
  imports: [
  ],
  controllers: [FightsControllers],
  providers: [
    {
      provide: KombatService,
      useClass: KombarServiceImpl,
    },
  ],
})
export class FightModule {}
