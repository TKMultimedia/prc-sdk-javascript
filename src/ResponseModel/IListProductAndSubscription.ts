import ISubscription from '../Model/ISubscription';
import IStripeProduct from '../Model/Stripe/IStripeProduct';

export default interface IListProductAndSubscription {
  listStripeProducts: IStripeProduct[];
  listSubscriptions: ISubscription[];
}
