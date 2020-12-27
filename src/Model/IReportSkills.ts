export interface IReportSkillBase {
  speed: number;
  agility: number;
  puckHandling: number;
  strength: number;
  offensive: number;
  leadership: number;
  agression: number;
  shooting: number;
  acceleration: number;
  shootingAccuracy: number;
  definsive: number;
  hitting: number;
  shootingBlocking: number;
}
export default interface IReportSkills extends IReportSkillBase {
  total: number;
}
