import IReportSkills from './IReportSkills';
import IUser from './IUser';

export default interface IReport {
  id: string;
  userId: string;
  player: IUser;
  createdBy: string;
  creator: IUser;
  scoutDate: number;
  game: string;
  skills: IReportSkills;
  scoutComment: string;
  longRangePotential: string;
  recommendation: string;
  published: boolean;
}
