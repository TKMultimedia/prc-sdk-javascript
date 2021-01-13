import IUser from './IUser';

export default interface IMediaFile {
  id: string
  path: string
  userId: string
  user: IUser
  uploadedAt: number
}
