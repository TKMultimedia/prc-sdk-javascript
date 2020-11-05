import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get } from 'lodash';
import IUserGroup from '../Model/IUserGroup';
import { groupResponseTransformer, transformSingleGroupResponse } from '../Transfomer/GroupResponseTransformer';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

class GroupApi extends AbstractApi {
  private readonly ENDPOINT: string = 'graphql';

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getAllGroups(): AxiosPromise<IUserGroup[]> {
    const query: string = `query {
      groups {
        name
        id
        isAdmin
        description
      }
    }`;

    return this.http.post(this.ENDPOINT, { query }, { transformResponse: groupResponseTransformer });
  }

  public upsertGroup(groupData: IUserGroup): AxiosPromise<IUserGroup> {
    const query: string = `mutation updateGroup($groupData: UserGroupInput!) {
      group(group: $groupData) {
        id,
        description,
        name
        isAdmin
      }
    }`;

    return this.http.post(
      this.ENDPOINT,
      { query, variables: groupData },
      { transformResponse: transformSingleGroupResponse });
  }
}

export default GroupApi;
