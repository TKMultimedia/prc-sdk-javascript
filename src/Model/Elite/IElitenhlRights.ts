import IEliteTeam from './IEliteTeam';

export default interface IElitenhlRights {
  id: number;
  rights: string;
  position: string;
  updatedAt: string;
  team: IEliteTeam;
}
