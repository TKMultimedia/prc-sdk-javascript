import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get } from 'lodash';
import IAuth from '../Model/IAuth';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

class AuthApi extends AbstractApi {
  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public login(email: string, password: string): AxiosPromise<IAuth> {
    return this.http.post('rest/login', { email, password });
  }
}

export default AuthApi;
