export default interface IEliteNationality {
  slug: string;
  name: string;
  updatedAt: string;
  _links: string[];
  flagUrl: IEliteFlagUrl;
}

export interface IEliteFlagUrl {
  small: string;
  medium: string;
}
