import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get } from 'lodash';
import IUserGroup from '../Model/IUserGroup';
import {
  generalResponseTransformer,
  groupResponseTransformer,
  transformSingleGroupResponse
} from '../Transfomer/GroupResponseTransformer';
import ICompactUserGroup from '../Model/ICompactUserGroup';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

class GroupApi extends AbstractApi {
  private readonly ENDPOINT: string = 'graphql';
  private readonly UserGroupObject: string = `{
    name
    id
    isAdmin
    description
    meta {
      key
      value
    }
  }`;

  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getAllGroups(): AxiosPromise<IUserGroup[]> {
    const query: string = `query {
      groups ${this.UserGroupObject}
    }`;

    return this.http.post(this.ENDPOINT, { query }, { transformResponse: groupResponseTransformer });
  }

  public getGroupById(groupId: string): AxiosPromise<IUserGroup> {
    const query: string = `query getSingleGroup($groupId: String!) {
      group(id: $groupId) ${this.UserGroupObject}
    }`;

    return this.http.post(
      this.ENDPOINT,
      { query, variables: { groupId } },
      { transformResponse: (data: string): IUserGroup => generalResponseTransformer(data, 'group')});
  }

  public upsertGroup(groupData: IUserGroup): AxiosPromise<IUserGroup> {
    const query: string = `mutation updateGroup($groupData: UserGroupInput!) {
      group(group: $groupData) ${this.UserGroupObject}
    }`;

    return this.http.post(
      this.ENDPOINT,
      { query, variables: { groupData } },
      { transformResponse: transformSingleGroupResponse });
  }

  public updatePolicy(groupId: string, meta: string[]): AxiosPromise<IUserGroup> {
    const query: string = `mutation updatePolicy($groupId: String!, $meta: [String]!) {
      updatePolicy(groupId: $groupId, meta: $meta) ${this.UserGroupObject}
    }`;

    return this.http.post(
      this.ENDPOINT,
      { query, variables: { groupId, meta } },
      { transformResponse: transformSingleGroupResponse });
  }

  public getRegisterGroups(): AxiosPromise<ICompactUserGroup[]> {
    const query: string = `query {
      registerGroups {
        id
        name
        description
      }
    }`;

    return this.http.post(
      this.ENDPOINT,
      { query },
      { transformResponse: (data: string): ICompactUserGroup[] => generalResponseTransformer(data, 'registerGroups')});
  }
}

export default GroupApi;
