import IEliteCoaches from './IEliteCoaches';
import { IEliteSeason } from './IEliteSeason';
import { IEliteStats } from './IEliteStats';
import IEliteTeam from './IEliteTeam';

export default interface IEliteLatestStats {
  id: number;
  status: string;
  team: IEliteTeam;
  teamName: string;
  teamLogoUrl: string;
  leagueName: string;
  leagueFullName: string;
  leagueType: string;
  jerseyNumber: number;
  playerRole: string;
  contractType: string;
  postseasonType: string;
  postseasonName: string;
  updatedAt: string;
  coaches: IEliteCoaches;
  totalStats: IEliteStats;
  postseasonStats: IEliteStats;
  regularStats: IEliteStats;
  season: IEliteSeason;
}
