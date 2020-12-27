import { IReportSkillBase } from '../Model/IReportSkills';

export default interface ICreateReportRequest {
  id?: string;
  userId: string;
  createdBy?: string;
  scoutDate: number;
  game: string;
  skills: IReportSkillBase;
  scoutComment: string;
  longRangePotential: string;
  recommendation: string;
  published?: boolean;
}
