import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseFilters,
} from '@nestjs/common';
import { Response } from 'express';

import { HttpErrorException } from 'src/commons/exceptions/http.exception';
import { KombatService } from 'src/mortal-kombat/domain/ports/services/iKombat.services';
import { FightRequest } from '@Event/domain/dto/request.dto';

@Controller('/kombat')
@UseFilters(HttpErrorException)
export class FightsControllers {
  constructor(private readonly kombatService: KombatService) {}

  @Post()
  async fight(@Body() players: FightRequest, @Res() res: Response) {
    const result = await this.kombatService.fight(players);
    res.status(HttpStatus.OK).json(result);
  }
}
