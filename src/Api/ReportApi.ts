import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get } from 'lodash';
import { generalResponseTransformer } from '../Transfomer/GroupResponseTransformer';
import QueryFields from '../Enum/QueryFields';
import IReport from '../Model/IReport';
import ICreateReportRequest from '../RequestModel/ICreateReportRequest';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

class ReportApi extends AbstractApi {
  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public listReports(startKey?: string, limit?: number): AxiosPromise<IReport[]> {
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

  public postReport(reportData: ICreateReportRequest): AxiosPromise<IReport> {
    const query: string = `mutation ($reportData: ReportInput!) {
      scoutReport(reportData: $reportData) {
        ${QueryFields.reportListFields}
      }
    }`;

    return this.http.post(
      'graphql',
      {
        query,
        variables: {
          reportData
        }
      },
      {
        transformResponse: (data: string): IReport => generalResponseTransformer(data, 'scoutReport')
      }
    );
  }
}

export default ReportApi;
