export class FightRequest {
  player1: ActionRequestDTO;
  player2: ActionRequestDTO;

  constructor(partial: Partial<Request>) {
    Object.assign(this, partial);
  }
}

export class ActionRequestDTO {
  movimientos: string[];
  golpes: string[];

  constructor(partial: Partial<ActionRequestDTO>) {
    Object.assign(this, partial);
  }
}
