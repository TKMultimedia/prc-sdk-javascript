import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get } from 'lodash';
import { generalResponseTransformer } from '../Transfomer/GroupResponseTransformer';
import QueryFields from '../Enum/QueryFields';
import IReport from '../Model/IReport';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

class ReportApi extends AbstractApi {
  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public listReports(startKey?: string, limit?: string): AxiosPromise<IReport[]> {
    const query: string = `query ($startKey: String, $limit: Int){
      listReports(startKey: $startKey, limit: $limit) ${QueryFields.reportListFields}
    }`;

    return this.http.post(
      'graphql',
      {
        query,
        variables: {
          startKey,
          limit
        }
      },
      {
        transformResponse: (data: string): IReport[] => generalResponseTransformer(data, 'listReports')
      }
    );
  }
}

export default ReportApi;
