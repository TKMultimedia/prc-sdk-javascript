import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get, isEmpty as _isEmpty } from 'lodash';
import { awesomeTransfomer, generalResponseTransformer } from '../Transfomer/GroupResponseTransformer';
import ISubscription from '../Model/ISubscription';
import ISubscriptionInputRequest from '../RequestModel/ISubscriptionInputRequest';
import IListProductAndSubscription from '../ResponseModel/IListProductAndSubscription';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

class SubscriptionApi extends AbstractApi {
  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  private readonly stripeProductFields: string = `{
    id
    object
    active
    attributes
    created
    description
    images
    livemode
    name
    type
    unit_label
    updated
  }`;

  private readonly subscriptionFields: string = `{
    name
    id
    type
    price
    promotionPrice
    promotionText
    features
    description
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
    stripeId
    disabled
    stripeProduct ${this.stripeProductFields}
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

  public getSubscriptionsAndProducts(): AxiosPromise<IListProductAndSubscription> {
    const query: string = `query {
      listSubscriptions ${this.subscriptionFields}
      listStripeProducts ${this.stripeProductFields}
    }`;

    return this.http.post(
      'graphql',
      { query },
      {
        transformResponse: awesomeTransfomer
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
