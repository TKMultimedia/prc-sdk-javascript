import AbstractApi from './AbstractApi';
import { AxiosPromise } from 'axios';
import { get as _get } from 'lodash';
import { generalResponseTransformer } from '../Transfomer/GroupResponseTransformer';
import IListSavePlayerResponse from '../ResponseModel/IListSavePlayerResponse';
import IElitePlayer from '../Model/Elite/IElitePlayer';
import IUser from '../Model/IUser';

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
      getUserById(userId: $userId) {
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
        transformResponse: (data: string): IUser => generalResponseTransformer(data, 'my.getUserById')
      }
    );
  };

  public getElitePlayerById(playerId: number): AxiosPromise<IElitePlayer> {
    const query: string = `query ($playerId: Float!) {
      getElitePlayerById(playerId: $playerId) {
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
        transformResponse: (data: string): IElitePlayer => generalResponseTransformer(data, 'my.getElitePlayerById')
      }
    );
  }

  public getMySavedPlayers(): AxiosPromise<IListSavePlayerResponse> {
    const query: string = `query {
      my {
        savedList {
          players
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
        transformResponse: (data: string): IListSavePlayerResponse => generalResponseTransformer(data, 'my.savedList')
      }
    );
  }
}

export default PlayerApi;
