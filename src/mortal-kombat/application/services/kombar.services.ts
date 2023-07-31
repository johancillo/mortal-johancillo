import { ActionRequestDTO, FightRequest } from '@Event/domain/dto/request.dto';
import { KombatService } from 'src/mortal-kombat/domain/ports/services/iKombat.services';
import { Injectable } from '@nestjs/common';
import {
  DEFAULT_MOVEMENTS,
  LIFE_DEFAULT,
  SPECIAL_COMBINATIONS,
} from '@Event/domain/const/fight-rules.const';
import { PlayerGameDTO } from '@Event/domain/dto/player.dto';
import { PlayDTO, PlayerCombinationDTO } from '@Event/domain/dto/movement.dto';

@Injectable()
export class KombarServiceImpl implements KombatService {
  private endGame = false;
  private battleHistory = [];
  private player1: PlayerGameDTO = new PlayerGameDTO(
    'Tonyn Stallone',
    'player1',
    LIFE_DEFAULT,
    0,
    0,
    false,
    null,
    false,
  );
  private player2: PlayerGameDTO = new PlayerGameDTO(
    'Arnaldor Shuatseneguer',
    'player2',
    LIFE_DEFAULT,
    0,
    0,
    false,
    null,
    false,
  );

  fight(players: FightRequest) {
    this.setDefaultConfigPlayers(players);

    const playMadeByPlayer = this.fightResult();
    const winner = this.player1.getWinner() ? this.player1 : this.player2;
    return { playMadeByPlayer, winningPlayer: winner };
  }

  setPlays(players: FightRequest) {
    const playP1 = new PlayDTO();
    playP1.playerCombinations = this.getCombinations(players.player1);
    this.player1.setPlays(playP1);

    const playP2 = new PlayDTO();
    playP2.playerCombinations = this.getCombinations(players.player2);
    this.player2.setPlays(playP2);
  }

  getCombinations(action: ActionRequestDTO): PlayerCombinationDTO[][] {
    const playerTurns = this.mergePlays(action);
    const plays = playerTurns.map((play) => {
      return this.mapPlayerPlay(play.join(''));
    });

    return plays;
  }

  mapPlayerPlay(play: string) {
    const specialPlay = SPECIAL_COMBINATIONS[play];
    if (specialPlay) {
      return [specialPlay];
    } else {
      const splitPlay = play.split('');
      return splitPlay.map((index) => {
        return DEFAULT_MOVEMENTS[index];
      });
    }
  }

  fightResult() {
    const battleMovements = this.orderPlaysByPlayer();
    for (let i = 0; i < battleMovements.length; i++) {
      this.battle(battleMovements[i]);
      if (this.endGame) break;
    }
    return this.battleHistory;
  }

  battle(items) {
    let firstHit = this.player1.getStart()
      ? this.player1.getStart()
      : this.player2.getStart();

    let currentPlayList = [];
    items.forEach((item) => {
      let attackPoint = 0;
      currentPlayList = [];
      item.forEach((play) => {
        attackPoint = play.attack.point + attackPoint;
        currentPlayList.push(play);
      });
      if (firstHit) {
        this.player2.receiveHit(attackPoint);

        const move = this.mapMoveHistory(
          currentPlayList,
          attackPoint,
          this.player1.getPlayer(),
          this.player2.getPlayer(),
        );

        this.battleHistory.push(move);
        firstHit = false;
      } else {
        this.player1.receiveHit(attackPoint);
        const move = this.mapMoveHistory(
          currentPlayList,
          attackPoint,
          this.player2.getPlayer(),
          this.player1.getPlayer(),
        );

        this.battleHistory.push(move);

        firstHit = true;
      }
      this.winnerValidation();
      if (this.player1.getWinner() || this.player2.getWinner()) {
        this.endGame = true;
      }
    });
  }

  mapMoveHistory(
    currentPlayList,
    attackPoint,
    playerAttacking: string,
    attackedPlayer: string,
  ) {
    return {
      playerAttacking: {
        player: this[playerAttacking].getPlayer(),
        playerName: this[playerAttacking].getName(),
        currentLife: this[playerAttacking].getLife(),
        play: currentPlayList,
      },
      attackedPlayer: {
        player: this[attackedPlayer].getPlayer(),
        name: this[attackedPlayer].getName(),
        damageReceive: attackPoint,
        currentLife: this[attackedPlayer].getLife(),
      },
    };
  }

  winnerValidation() {
    if (this.player1.getLife() <= 0) {
      this.player2.setWinner(true);
    } else if (this.player2.getLife() <= 0) {
      this.player1.setWinner(true);
    }
  }

  selectPlayerToStart() {
    const p1SumMovements =
      this.player1.getQuantityMove() + this.player1.getQuantutyHit();
    const p2SumMovements =
      this.player2.getQuantityMove() + this.player2.getQuantutyHit();

    if (p1SumMovements < p2SumMovements) {
      this.player1.setStart(true);
    } else if (p1SumMovements > p2SumMovements) {
      this.player2.setStart(true);
    }

    const p1Moves = this.player1.getQuantityMove();
    const p2Moves = this.player2.getQuantityMove();
    if (p1Moves < p2Moves) {
      this.player1.setStart(true);
    } else if (p1Moves > p2Moves) {
      this.player2.setStart(true);
    }

    const p1Hits = this.player1.getQuantutyHit();
    const p2Hits = this.player2.getQuantutyHit();

    if (p1Hits < p2Hits) {
      this.player1.setStart(true);
    } else if (p1Hits > p2Hits) {
      this.player2.setStart(true);
    }

    this.player1.setStart(true);
  }

  setDefaultConfigPlayers(players: FightRequest) {
    this.setPlays(players);
    this.setNumberMovements(players);
    this.setNumberHits(players);
    this.selectPlayerToStart();
  }

  orderPlaysByPlayer() {
    if (this.player1.getStart)
      return this.player1
        .getPlays()
        .playerCombinations.map((element, index) => [
          element,
          this.player2.getPlays().playerCombinations[index],
        ]);
    return this.player2
      .getPlays()
      .playerCombinations.map((element, index) => [
        element,
        this.player1.getPlays().playerCombinations[index],
      ]);
  }

  mergePlays(action: ActionRequestDTO) {
    return action.movimientos.map((element, index) => [
      element,
      action.golpes[index],
    ]);
  }

  setNumberMovements(players: FightRequest) {
    this.player1.setQuantityMove(players.player1.movimientos.join('').length);
    this.player2.setQuantityMove(players.player2.movimientos.join('').length);
  }

  setNumberHits(players: FightRequest) {
    this.player1.setQuantutyHit(players.player1.golpes.join('').length);
    this.player2.setQuantutyHit(players.player2.golpes.join('').length);
  }
}
