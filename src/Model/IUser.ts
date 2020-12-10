import ILoginTrack from './ILoginTrack';
import IPlayerMeta from './IPlayerMeta';
import IUserGroup from './IUserGroup';
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
}
