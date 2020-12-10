import IStripePrice from './IStripePrice';

export default interface IStripeSubscriptionItem {
  id: string;
  object: string;
  billing_thresholds: string;
  created: number;
  quantity: number;
  subscription: string;
  tax_rates: string[];
  price: IStripePrice;
}
