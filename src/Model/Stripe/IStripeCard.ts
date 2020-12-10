export default interface IStripeCard {
  brand: string;
  country: string;
  exp_month: number;
  exp_year: number;
  fingerprint: string;
  funding: string;
  generated_from: string;
  last4: string;
  wallet: string;
  three_d_secure_usage: {
    supported: boolean;
  };
  networks: {
    preferred: string;
    available: string[];
  };
  checks: {
    address_line1_check: string;
    address_postal_code_check: string;
    cvc_check: string;
  };
}
