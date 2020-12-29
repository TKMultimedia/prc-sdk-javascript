import IEliteLinks from './IEliteLinks';

export default interface IEliteStaff {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  alternativeName: string;
  imageUrl: string;
  imageCopyright: string;
  status: string;
  dateOfBirth: string;
  placeOfBirth: string;
  views: number;
  biography: string;
  updatedAt: string;
  _links: string[];
  links: IEliteLinks;
  role: string;
  staffData: IEliteStaff;
}
