import IReportSkills from '../Model/IReportSkills';

export default interface ICreateReportRequest {
  id?: string;
  userId: string;
  createdBy?: string;
  scoutDate: number;
  game: string;
  skills: IReportSkills;
  scoutComment: string;
  longRangePotential: string;
  recommendation: string;
  published?: boolean;
}
