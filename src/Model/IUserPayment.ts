import IStripeCustomer from './Stripe/IStripeCustomer';
import IStripePaymentMethod from './Stripe/IStripePaymentMethod';
import IStripeSubscription from './Stripe/IStripeSubscription';

export default interface IUserPayment {
  userId: string;
  stripeCustomerId: string;
  stripeCustomer: IStripeCustomer;
  paymentMethods: string[];
  paymentMethodData: IStripePaymentMethod;
  subscriptions: IStripeSubscription[];
}
