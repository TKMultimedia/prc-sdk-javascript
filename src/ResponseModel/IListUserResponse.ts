import IUser from '../Model/IUser';

export default interface IListUserResponse {
  totalUsers: number;
  users: IUser[];
}
