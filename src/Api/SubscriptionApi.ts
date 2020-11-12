import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get, isEmpty as _isEmpty } from 'lodash';
import { generalResponseTransformer } from '../Transfomer/GroupResponseTransformer';
import ISubscription from '../Model/ISubscription';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

class SubscriptionApi extends AbstractApi {
  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getSubscriptionsList(): AxiosPromise<ISubscription[]> {
    const query: string = `query {
      listSubscriptions {
        name
        id
        type
        userGroup {
          name
          id
        }
        latestUpdated
        createdTime
        creator {
          lastName
          firstName
          userId
        }
        updator {
          userId
          lastName
          firstName
        }
      }
    }`;

    return this.http.post(
      'graphql',
      { query },
      {
        transformResponse: (data: string): ISubscription[] => generalResponseTransformer(data, 'listSubscriptions')
      }
    );
  }
}

export default SubscriptionApi;
