import { CommonModule } from '@Commons/commons.module';
import { FightModule } from 'src/mortal-kombat/fight.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [FightModule, CommonModule],
})
export class AppModule {}
