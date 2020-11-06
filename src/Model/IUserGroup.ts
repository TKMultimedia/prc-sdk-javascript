import IGroupMeta from './IGroupMeta';

export default interface IUserGroup {
  id?: string;
  name: string;
  description: string;
  isAdmin: boolean;
  meta?: IGroupMeta[];
}
