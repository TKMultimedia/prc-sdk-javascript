import IEliteLinks from './IEliteLinks';

export default interface IEliteAgencies {
  id: number;
  name: string;
  logoUrl: string;
  location: string;
  email: string;
  info: string;
  numberOfClients: number;
  updatedAt: string;
  _links: string[];
  links: IEliteLinks;
  agents: string[];
}
