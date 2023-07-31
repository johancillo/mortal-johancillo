import { FightRequest } from '@Event/domain/dto/request.dto';

export abstract class KombatService {
  abstract fight(players: FightRequest);
}
