import IStripeSubscriptionItem from './IStripeSubscriptionItem';

export default interface IStripeSubscription {
  items: {
    object: string;
    has_more: boolean;
    url: string;
    data: IStripeSubscriptionItem[];
  };
}
