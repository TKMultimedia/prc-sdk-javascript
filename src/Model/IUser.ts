import ILoginTrack from './ILoginTrack';
import IPlayerMeta from './IPlayerMeta';
import IReport from './IReport';
import IUserGroup from './IUserGroup';
import IUserPayment from './IUserPayment';
import IUserProfile from './IUserProfile';

export default interface IUser {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  userGroup: IUserGroup;
  registrationNumber: string;
  provider: string;
  loginTracks: ILoginTrack[];
  playerMeta: IPlayerMeta;
  createdAt: number;
  profile: IUserProfile;
  userPayment: IUserPayment;
  reports: IReport[];
}
