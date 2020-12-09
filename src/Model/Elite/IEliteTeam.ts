import IEliteLinks from './IEliteLinks';
import IEliteNationality from './IEliteNationality';
import IElitePlayer from './IElitePlayer';

export default interface IEliteTeam {
  id: number;
  name: string;
  extraName: string;
  fullName: string;
  logoUrl: string;
  founded: number;
  city: string;
  colors: string;
  status: string;
  teamType: string;
  teamClass: string;
  continent: string;
  capHit: string;
  views: number;
  notes: string;
  updatedAt: string;
  _links: string[];
  links: IEliteLinks;
  players: IElitePlayer[];
  country: IEliteNationality;
  teamData: IEliteTeam;
}
