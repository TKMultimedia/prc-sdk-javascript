import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get, isEmpty as _isEmpty } from 'lodash';
import { generalResponseTransformer } from '../Transfomer/GroupResponseTransformer';
import ISubscription from '../Model/ISubscription';
import ISubscriptionInputRequest from '../RequestModel/ISubscriptionInputRequest';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

class SubscriptionApi extends AbstractApi {
  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  private readonly subscriptionFields: string = `{
    name
    id
    type
    price
    promotionPrice
    promotionText
    features
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
  }`;

  public getSubscriptionsList(): AxiosPromise<ISubscription[]> {
    const query: string = `query {
      listSubscriptions ${this.subscriptionFields}
    }`;

    return this.http.post(
      'graphql',
      { query },
      {
        transformResponse: (data: string): ISubscription[] => generalResponseTransformer(data, 'listSubscriptions')
      }
    );
  }

  public saveSubscription(subscription: ISubscriptionInputRequest): AxiosPromise<ISubscription> {
    const query: string = `mutation ($subscription: SubscriptionInput!) {
      subscriptionUpdate(subscription: $subscription) ${this.subscriptionFields}
    }`;

    return this.http.post(
      'graphql',
      {
        query,
        variables: { subscription }
      },
      {
        transformResponse: (data: string): ISubscription => generalResponseTransformer(data, 'subscriptionUpdate')
      }
    );
  }
}

export default SubscriptionApi;
