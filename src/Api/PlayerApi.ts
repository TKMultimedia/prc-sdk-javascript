import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get } from 'lodash';
import { generalResponseTransformer } from '../Transfomer/GroupResponseTransformer';
import IElitePlayer from '../Model/Elite/IElitePlayer';
import IUser from '../Model/IUser';
import QueryFields from '../Enum/QueryFields';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

class PlayerApi extends AbstractApi {
  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getInternalPlayerById(userId: string): AxiosPromise<IUser> {
    const query: string = `query ($userId: String!) {
      getUserById(userId: $userId) ${QueryFields.userFields}
    }`;

    return this.http.post(
      'graphql',
      {
        query,
        variables: {
          userId
        }
      },
      {
        transformResponse: (data: string): IUser => generalResponseTransformer(data, 'getUserById')
      }
    );
  }

  public getElitePlayerById(playerId: number): AxiosPromise<IElitePlayer> {
    const query: string = `query ($playerId: Float!) {
      getElitePlayerById(playerId: $playerId) ${QueryFields.elitePlayerFields}
    }`;

    return this.http.post(
      'graphql',
      {
        query,
        variables: {
          playerId
        }
      },
      {
        transformResponse: (data: string): IElitePlayer => generalResponseTransformer(data, 'getElitePlayerById')
      }
    );
  }

  public searchForInternalPlayers(playerName: string, fullFields: boolean = false): AxiosPromise<IUser[]> {
    const query: string = `query ($name: String!){
      searchForInternalPlayers(playerName: $name) ${fullFields === true ? QueryFields.userFields : QueryFields.userLightFields}
    }`;

    return this.http.post(
      'graphql',
      {
        query,
        variables: {
          name: playerName
        }
      },
      {
        transformResponse: (data: string): IUser[] => generalResponseTransformer(data, 'searchForInternalPlayers')
      }
    );
  }

  public searchForScout(scoutName: string, fullFields: boolean = false): AxiosPromise<IUser[]> {
    const query: string = `query ($name: String!){
      searchForScouts(scoutName: $name) ${fullFields === true ? QueryFields.userFields : QueryFields.userLightFields}
    }`;

    return this.http.post(
      'graphql',
      {
        query,
        variables: {
          name: scoutName
        }
      },
      {
        transformResponse: (data: string): IUser[] => generalResponseTransformer(data, 'searchForScouts')
      }
    );
  }
}

export default PlayerApi;
