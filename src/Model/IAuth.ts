import TokenType from '../Enum/TokenType';

export default interface IAuth {
  accessToken: string;
  refreshToken: string;
  tokenType: TokenType;
  resetPassword?: boolean;
}
