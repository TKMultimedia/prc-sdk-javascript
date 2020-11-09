import AbstractApi from './AbstractApi';
import { AxiosPromise, AxiosResponse } from 'axios';
import { get as _get, isEmpty as _isEmpty } from 'lodash';
import IAuth from '../Model/IAuth';
import IUserRegistrationRequest from '../RequestModel/IUserRegistrationRequest';
import AuthProvider from '../Enum/AuthProvider';
import IGraphQLGeneralResponse from '../ResponseModel/IGraphqlGeneralResponse';
import { wrapAxiosResponse } from '../Utility/DataTransformUtility';

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

  public async createAppUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    groupId: string,
    registrationNumber?: string
  ): Promise<AxiosResponse<IAuth>> {
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

    const dataResponse: AxiosResponse<IGraphQLGeneralResponse> = await this.http.post('graphql', {
      query,
      variables: { userData }
    });

    if (_isEmpty(dataResponse.data.errors) === true) {
      return wrapAxiosResponse<IAuth>(_get(dataResponse.data.data, 'createNewUser', {}));
    }

    throw Error(_get(dataResponse, 'errors[0].message', 'Request error!'));
  }
}

export default AuthApi;
