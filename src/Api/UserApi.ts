import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get, isEmpty as _isEmpty } from 'lodash';
import { generalResponseTransformer } from '../Transfomer/GroupResponseTransformer';
import IEliteTeam from '../Model/Elite/IEliteTeam';
import IListSavePlayerResponse from '../ResponseModel/IListSavePlayerResponse';
import QueryFields from '../Enum/QueryFields';
import IReport from '../Model/IReport';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

class UserApi extends AbstractApi {
  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getMySavedReports(): AxiosPromise<IReport[]> {
    const query: string = `query {
      my {
        savedList {
          reportData ${QueryFields.reportListFields}
        }
      }
    }`;

    return this.http.post(
      'graphql',
      {
        query
      },
      {
        transformResponse: (data: string): IReport[] => generalResponseTransformer(data, 'my.savedList.reportData')
      }
    );
  }

  public getMySavedTeams(): AxiosPromise<IEliteTeam[]> {
    const query: string = `query {
      my {
        savedList {
          teamData ${QueryFields.teamFields}
        }
      }
    }`;

    return this.http.post(
      'graphql',
      {
        query
      },
      {
        transformResponse: (data: string): IEliteTeam[] => generalResponseTransformer(data, 'my.savedList.teamData')
      }
    );
  }

  public getMySavedPlayers(): AxiosPromise<IListSavePlayerResponse> {
    const query: string = `query {
      my {
        savedList {
          players
          playerData {
            internalPlayers ${QueryFields.userFields}
            elitePlayers ${QueryFields.elitePlayerFields}
          }
        }
      }
    }`;

    return this.http.post(
      'graphql',
      {
        query
      },
      {
        transformResponse: (data: string): IListSavePlayerResponse => generalResponseTransformer(data, 'my.savedList')
      }
    );
  }
}

export default UserApi;
