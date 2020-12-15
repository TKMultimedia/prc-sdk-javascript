import IElitePlayer from '../Model/Elite/IElitePlayer';
import IUser from '../Model/IUser';

export default interface IListSavePlayerResponse {
  players: string[];
  playerData: IListSavePlayer;
}
export interface IListSavePlayer {
  elitePlayers: IElitePlayer[];
  internalPlayers: IUser[];
}
