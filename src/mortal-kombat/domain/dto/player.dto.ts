import { PlayDTO } from './movement.dto';

export class PlayerGameDTO {
  name: string;
  player: string;
  life: number;
  totalMovements: number;
  quantutyHit: number;
  quantityMove: number;
  start: boolean;
  plays: PlayDTO | null;
  winner: boolean;

  constructor(
    name: string,
    player: string,
    life: number,
    quantutyHit: number,
    quantityMove: number,
    start: boolean,
    plays: PlayDTO | null,
    winner: boolean,
  ) {
    this.name = name;
    this.player = player;
    this.life = life;
    this.quantutyHit = quantutyHit;
    this.quantityMove = quantityMove;
    this.start = start;
    this.plays = plays;
    this.winner = winner;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getPlayer() {
    return this.player;
  }

  setPlayer(player: string) {
    this.player = player;
  }

  getLife() {
    return this.life;
  }
  setLife(life: number) {
    this.life = life;
  }

  getQuantutyHit() {
    return this.quantutyHit;
  }

  setQuantutyHit(quantutyHit: number) {
    this.quantutyHit = quantutyHit;
  }

  getQuantityMove() {
    return this.quantityMove;
  }
  setQuantityMove(quantityMove: number) {
    this.quantityMove = quantityMove;
  }

  getStart() {
    return this.start;
  }

  setStart(start: boolean) {
    this.start = start;
  }

  getPlays() {
    return this.plays;
  }

  setPlays(actions: PlayDTO) {
    this.plays = actions;
  }

  getWinner() {
    return this.winner;
  }

  setWinner(winner: boolean) {
    this.winner = winner;
  }

  receiveHit(pointAttack: number) {
    this.life = this.life - pointAttack;
  }
}
