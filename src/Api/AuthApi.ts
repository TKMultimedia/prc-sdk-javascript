import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get } from 'lodash';
import IAuth from '../Model/IAuth';
import IUserRegistrationRequest from '../RequestModel/IUserRegistrationRequest';
import AuthProvider from '../Enum/AuthProvider';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

class AuthApi extends AbstractApi {
  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  private readonly authResponseObject: string = `{
    accessToken
    refreshToken
    tokenType
  }`;

  public login(email: string, password: string): AxiosPromise<IAuth> {
    return this.http.post('rest/login', { email, password });
  }

  public createAppUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    groupId: string,
    registrationNumber?: string
  ): AxiosPromise<IAuth> {
    const query: string = `mutation createUser($userData: UserInput!){
      createNewUser(userData: $userData) ${this.authResponseObject}
    }`;

    let userData: IUserRegistrationRequest = {
      firstName,
      lastName,
      email,
      groupId,
      provider: AuthProvider.App,
      password
    };

    if (typeof registrationNumber !== 'undefined') {
      userData = {
        ...userData,
        registrationNumber
      };
    }

    return this.http.post('graphql', {
      query,
      variables: { userData }
    });
  }
}

export default AuthApi;
