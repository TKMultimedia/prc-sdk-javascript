import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get, isEmpty as _isEmpty } from 'lodash';
import { generalResponseTransformer } from '../Transfomer/GroupResponseTransformer';
import IAppSetting from '../Model/IAppSetting';
import AppSettingKey from '../Enum/AppSettingKey';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

class AppSettingsApi extends AbstractApi {
  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  private readonly appSettingsFields: string = `{
    key
    value
    creator {
      firstName
      lastName
      userId
    }
    updator {
      firstName
      lastName
      userId
    }
    createdTime
    latestUpdated
  }`;

  public getAppSettings(): AxiosPromise<IAppSetting[]> {
    const query: string = `query {
      appSettings ${this.appSettingsFields}
    }`;

    return this.http.post(
      'graphql',
      { query },
      {
        transformResponse: (data: string): IAppSetting[] => generalResponseTransformer(data, 'appSettings')
      }
    );
  }

  public setAppSettings(key: AppSettingKey, value: string): AxiosPromise<IAppSetting> {
    const query: string = `mutation ($key: String!, $value: String!){
      updateAppSettings(key: $key, value: $value) ${this.appSettingsFields}
    }`;

    return this.http.post(
      'graphql',
      {
        query,
        variables:
          { key, value }
      },
      {
        transformResponse: (data: string): IAppSetting => generalResponseTransformer(data, 'updateAppSettings')
      }
    );
  }
}

export default AppSettingsApi;
