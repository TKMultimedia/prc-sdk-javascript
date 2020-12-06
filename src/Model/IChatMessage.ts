import IUser from './IUser';

export default interface IChatMessage {
  id: string;
  starterId: string;
  receiverId: string;
  deleted: boolean;
  conversationId: string;
  messageBody: string;
  createdAt: string;
  sender: IUser;
  receiver: IUser;
  read?: boolean;
}
