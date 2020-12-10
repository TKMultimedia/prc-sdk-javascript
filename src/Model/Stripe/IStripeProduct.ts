import ISubscription from '../ISubscription';

export default interface IStripeProduct {
  id: string;
  object: string;
  active: boolean;
  attributes: string[];
  created: number;
  description: string;
  images: string[];
  livemode: boolean;
  name: string;
  statement_descriptor: string;
  unit_label: string;
  updated: number;
  subscriptionData: ISubscription;
}
