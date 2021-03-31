export interface IReportSkillBase {
  skatingMechanics: number; 
  control: number;
  speed: number;
  aggressiveness: number;
  battle: number;
  persistence: number;
  vision: number;
  position: number;
  execution: number;
  puckHandling: number;
  passing: number;
  shooting: number;
}
export default interface IReportSkills extends IReportSkillBase {
  total: number;
}
