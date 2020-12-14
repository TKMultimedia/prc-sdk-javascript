import IElitePlayer from '../Model/Elite/IElitePlayer';
import IUser from '../Model/IUser';

export default interface IListSavePlayerResponse {
  elitePlayers: IElitePlayer[];
  internalPlayers: IUser[];
}
