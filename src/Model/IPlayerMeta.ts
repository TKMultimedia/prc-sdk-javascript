import IElitePlayer from './Elite/IElitePlayer';

export default interface IPlayerMeta {
  playerId: number;
  elitePlayer: IElitePlayer;
  rating: number;
  verified: boolean;
}
