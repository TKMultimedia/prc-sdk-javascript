import SubscriptionType from '../Enum/SubscriptionType';

export default interface ISubscriptionInputRequest {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  promotionPrice?: number;
  promotionText?: string;
  features?: string[];
  groupId?: string;
  type?: SubscriptionType;
  stripeId?: string;
}
