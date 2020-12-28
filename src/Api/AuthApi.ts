import AbstractApi from './AbstractApi';
import { AxiosPromise, AxiosResponse } from 'axios';
import { get as _get, isEmpty as _isEmpty } from 'lodash';
import IAuth from '../Model/IAuth';
import IUserRegistrationRequest from '../RequestModel/IUserRegistrationRequest';
import AuthProvider from '../Enum/AuthProvider';
import IGraphQLGeneralResponse from '../ResponseModel/IGraphQLGeneralResponse';
import { wrapAxiosResponse } from '../Utility/DataTransformUtility';
import IListUserResponse from '../ResponseModel/IListUserResponse';
import IListUserVariableRequest from '../RequestModel/IListUserVariableRequest';
import { awesomeTransfomer, generalResponseTransformer } from '../Transfomer/GroupResponseTransformer';

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
    const query: string = `query ($email: String!, $password: String!) {
      userLogin(email: $email, password: $password) {
        accessToken
        refreshToken
        resetPassword
        tokenType
      }
    }`;

    return this.http.post(
      'graphql',
      {
        query,
        variables: {
          email,
          password
         }
      },
      {
        transformResponse: (data: string): IAuth => generalResponseTransformer(data, 'userLogin')
      }
    );
  }

  public refreshToken(refreshToken: string): AxiosPromise<IAuth> {
    const query: string = `query ($refreshToken: String!) {
      userRefreshToken(refreshToken: $refreshToken) {
        accessToken
        refreshToken
        resetPassword
        tokenType
      }
    }`;

    return this.http.post(
      'graphql',
      {
        query,
        variables: {
          refreshToken
        }
      },
      {
        transformResponse: (data: string): IAuth => generalResponseTransformer(data, 'userRefreshToken')
      }
    );
  }

  public async createAppUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    groupId: string,
    registrationNumber?: string
  ): Promise<AxiosResponse<IAuth>> {
    const query: string = `mutation ($userData: UserInput!){
      user(userData: $userData) ${this.authResponseObject}
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

  public updateUser(userData: IUserRegistrationRequest): AxiosPromise<IAuth> {
    const query: string = `mutation ($userData: UserInput!){
      user(userData: $userData) ${this.authResponseObject}
    }`;

    return this.http.post(
      'graphql',
      {
        query,
        variables: { userData }
      },
      {
        transformResponse: (data: string): IAuth => generalResponseTransformer(data, 'user')
      }
    );
  }

  public listUsers(size: number, startUserId?: string): AxiosPromise<IListUserResponse> {
    let requestVariables: IListUserVariableRequest = {
      size
    };

    if (typeof startUserId !== 'undefined') {
      requestVariables = {
        ...requestVariables,
        startUserId
      };
    }

    const query: string = `query ($size: Int, $startUserId: String) {
      users(size: $size, startUserId: $startUserId) {
        userId
        userGroup {
          name
          id
        }
        firstName
        lastName
        email
        registrationNumber
        provider
        loginTracks {
          time
          userAgent
          ipLocation {
            city
          }
        }
      }
      totalUsers
    }`;

    return this.http.post(
      'graphql',
      {
        query,
        variables: requestVariables
      },
      {
        transformResponse: awesomeTransfomer
      }
    );
  }
}

export default AuthApi;
