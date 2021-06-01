import IUser from './IUser';

export default interface IReport {
  id: string;
  playerId: string;
  player: IUser;
  scoutId: string;
  scout: IUser;
  createdAt: string;
  amount: number;
}
