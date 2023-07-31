// move.dto.ts
export class MoveDTO {
  name: string;
  attack: {
    enable: boolean;
    point: number;
  };
}

// player-combination.dto.ts

export class PlayerCombinationDTO {
  moves: MoveDTO[];
  constructor(partial: Partial<PlayerCombinationDTO>) {
    Object.assign(this, partial);
  }
}

// main.dto.ts

export class PlayDTO {
  playerCombinations: PlayerCombinationDTO[][];
}
