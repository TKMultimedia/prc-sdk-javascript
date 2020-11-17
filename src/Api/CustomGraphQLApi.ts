import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get, isEmpty as _isEmpty } from 'lodash';
import { awesomeTransfomer } from '../Transfomer/GroupResponseTransformer';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

class CustomGraphQLApi extends AbstractApi {
  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public execution(query: string, variables?: any): AxiosPromise {
    let bodyRequest: { query: string; variables?: any } = {
      query
    };

    if (typeof variables !== 'undefined') {
      bodyRequest = {
        ...bodyRequest,
        variables
      };
    }

    return this.http.post(
      'graphql',
      bodyRequest,
      {
        transformResponse: awesomeTransfomer
      }
    );
  }
}

export default CustomGraphQLApi;
