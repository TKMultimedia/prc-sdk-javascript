import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get } from 'lodash';
import { generalResponseTransformer } from '../Transfomer/GroupResponseTransformer';
import IElitePlayer from '../Model/Elite/IElitePlayer';
import QueryFields from '../Enum/QueryFields';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

class TeamApi extends AbstractApi {
  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getEliteTeamById(teamId: number): AxiosPromise<IElitePlayer> {
    const query: string = `query ($teamId: Float!) {
      getEliteTeamById(teamId: $teamId) ${QueryFields.teamFields}
    }`;

    return this.http.post(
      'graphql',
      {
        query,
        variables: {
          teamId
        }
      },
      {
        transformResponse: (data: string): IElitePlayer => generalResponseTransformer(data, 'getEliteTeamById')
      }
    );
  }
}

export default TeamApi;
