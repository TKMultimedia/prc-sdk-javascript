import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get, isEmpty as _isEmpty } from 'lodash';
import { generalResponseTransformer } from '../Transfomer/GroupResponseTransformer';
import IEliteTeam from '../Model/Elite/IEliteTeam';
import IListSavePlayerResponse from '../ResponseModel/IListSavePlayerResponse';

/**
 * @since v1.0.0
 * Implemented by ThienKhoi Tran <tranthienkhoi@gmail.com>
 */

class UserApi extends AbstractApi {
  // --------------------------------------------------------------------------------------------
  // Public methods
  // --------------------------------------------------------------------------------------------

  public getMySavedTeams(): AxiosPromise<IEliteTeam[]> {
    const query: string = `query {
      my {
        savedList {
          teamData {
            id
            name
            fullName
            logoUrl
            city
            country {
              name
              flagUrl {
                medium
                small
              }
            }
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
        transformResponse: (data: string): IEliteTeam[] => generalResponseTransformer(data, 'my.savedList.teamData')
      }
    );
  }

  public getMySavedPlayers(): AxiosPromise<IListSavePlayerResponse> {
    const query: string = `query {
      my {
        savedList {
          playerData {
            internalPlayers {
              userId
              lastName
              firstName
              createdAt
              playerMeta {
                  playerId
                  verified
                  elitePlayer {
                    imageUrl
                    dateOfBirth
                    placeOfBirth
                    nationality {
                      name
                      flagUrl {
                        small
                        medium
                      }
                    }
                    height {
                      imperial
                    }
                    weight {
                      imperial
                    }
                    position
                    latestStats {
                      team {
                        teamData {
                          name
                          logoUrl
                        }
                      }
                      jerseyNumber
                    }
                  }
              }
              profile {
                ratingPoint
                id
                profilePicture
                follower {
                  count
                }
                following {
                  count
                }
                playerId
                userId
              }
              userPayment {
                subscriptions {
                  items {
                    data {
                      price {
                        productData {
                          subscriptionData {
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            elitePlayers {
              id
              name
              userData {
                imageUrl
                dateOfBirth
                placeOfBirth
                nationality {
                  name
                  flagUrl {
                    small
                    medium
                  }
                }
                height {
                  imperial
                }
                weight {
                  imperial
                }
                position
                latestStats {
                  team {
                    teamData {
                      name
                      logoUrl
                    }
                  }
                  jerseyNumber
                }
              }
              profile {
                ratingPoint
                id
                profilePicture
                follower {
                  count
                }
                following {
                  count
                }
                playerId
                userId
              }
            }
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
        transformResponse: (data: string): IListSavePlayerResponse => generalResponseTransformer(data, 'my.savedList.playerData')
      }
    );
  }
}

export default UserApi;
