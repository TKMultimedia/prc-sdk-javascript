import IElitePlayer from '../Model/Elite/IElitePlayer';
import IUser from '../Model/IUser';

export default interface IListSavePlayerReponse {
  players: string[];
  playerData: IListSavePlayer;
}
export interface IListSavePlayer {
  elitePlayers: IElitePlayer[];
  internalPlayers: IUser[];
}
