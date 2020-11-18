import SubscriptionType from '../Enum/SubscriptionType';
import IUser from './IUser';
import IUserGroup from './IUserGroup';
import IStripeProduct from './Stripe/IStripeProduct';

export default interface ISubscription {
  id: string;
  name: string;
  description: string;
  userGroup: IUserGroup;
  creator: IUser;
  updator: IUser;
  createdTime: number;
  latestUpdated: number;
  price: number;
  promotionPrice: number;
  promotionText: string;
  features: string[];
  type: SubscriptionType;
  stripeId: string;
  stripeProduct: IStripeProduct;
  disabled: boolean;
}
