import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get } from 'lodash';
import IUserGroup from '../Model/IUserGroup';
import { TransformFunction } from '../Types/TransformFunction';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

const transformer: TransformFunction<IUserGroup[]> = (
  data: string
): IUserGroup[] =>
  _get(JSON.parse(data), 'data.groups', []);

class GroupApi extends AbstractApi {
  private readonly ENDPOINT: string = 'graphql';

  public constructor(env: string, token?: string) {
    super(env, token, transformer);
  }

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getAllGroups(): AxiosPromise<IUserGroup[]> {
    const query: string = `query {
      groups {
        name
        id
        isAdmin
      }
    }`;

    return this.http.post(this.ENDPOINT, { query });
  }
}

export default GroupApi;
