import AppSettingKey from '../Enum/AppSettingKey';
import IUser from './IUser';

export default interface IAppSetting {
  key: AppSettingKey;
  value: string;
  creator: IUser;
  updator: IUser;
  createdTime: number;
  latestUpdated: number;
}
