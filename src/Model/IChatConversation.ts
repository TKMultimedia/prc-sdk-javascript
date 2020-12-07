import IChatMessage from './IChatMessage';
import IUser from './IUser';

export default interface IChatConversation {
  id: string;
  receiver: IUser;
  sender: IUser;
  messages: IChatMessage[];
}
