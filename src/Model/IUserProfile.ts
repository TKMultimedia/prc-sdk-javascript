import IProfileFollowUser from './IProfileFollowUser';

export default interface IUserProfile {
  id: string;
  userId: string;
  playerId: number;
  ratingPoint: number;
  profilePicture: string;
  ratingCount: number;
  follower: IProfileFollowUser;
  following: IProfileFollowUser
}
