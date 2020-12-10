import IStripeCard from './IStripeCard';

export default interface IStripePaymentMethod {
  id: string;
  object: string;
  created: number;
  customer: string;
  livemode: boolean;
  type: string;
  card: IStripeCard;
  billing_details: {
    email: string;
    name: string;
    phone: string;
    address: {
      city: string;
      country: string;
      line1: string;
      line2: string;
      postal_code: string;
      state: string;
    };
  };
}
