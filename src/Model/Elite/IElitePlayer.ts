import IUser from '../IUser';
import IEliteAgencies from './IEliteAgencies';
import IEliteLatestStats from './IEliteLatestStats';
import IEliteLinks from './IEliteLinks';
import { IEliteHeight, IEliteWeight } from './IEliteMetric';
import IEliteNationality from './IEliteNationality';
import IElitenhlRights from './IElitenhlRights';
import IEliteStaff from './IEliteStaff';

export default interface IElitePlayer {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  alternativeFirstName: string;
  alternativeLastName: string;
  alternativeName: string;
  gender: string;
  status: string;
  position: string;
  shoots: string;
  catches: string;
  dateOfBirth: string;
  placeOfBirth: string;
  youthTeam: string;
  contract: string;
  capHit: string;
  gameStatus: string;
  gameStatusInfo: string;
  views: number;
  imageUrl: string;
  imageCopyright: string;
  pronunciationUrl: string;
  profileDescriptionAsHTML: string;
  biographyAsHTML: string;
  updatedAt: string;
  _links: string[];
  links: IEliteLinks;
  agencies: IEliteAgencies[];
  nhlRights: IElitenhlRights;
  latestStats: IEliteLatestStats;
  staff: IEliteStaff;
  height: IEliteHeight;
  weight: IEliteWeight;
  nationality: IEliteNationality;
  secondaryNationality: IEliteNationality;
  detailedPosition: string[];
  internalUser: IUser;
}
