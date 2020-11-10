import IUserGroup from './IUserGroup';

export default interface IUser {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  userGroup: IUserGroup;
  registrationNumber: string;
  provider: string;
}
