import IInvoiceSettings from './IInvoiceSettings';

export default interface IStripeCustomer {
  object: string;
  address: string;
  balance: number;
  created: number;
  currency: string;
  default_source: string;
  delinquent: boolean;
  description: string;
  discount: string;
  email: string;
  invoice_prefix: string;
  livemode: boolean;
  name: string;
  next_invoice_sequence: number;
  phone: string;
  shipping: string;
  tax_exempt: string;
  preferred_locales: string[];
  invoice_settings: IInvoiceSettings;
  id: string;
}
