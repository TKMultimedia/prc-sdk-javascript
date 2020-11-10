import AuthProvider from '../Enum/AuthProvider';

export default interface IUserRegistrationRequest {
  userId?: string;
  groupId: string;
  password?: string;
  firstName: string;
  lastName: string;
  email: string;
  registrationNumber?: string; // For player only
  provider?: AuthProvider;
}
