const profileFields: string = `{
  id
  follower {
    count
    list
  }
  following {
    count
    list
  }
  playerId
  userId
}`;

const userLightFields: string = `{
  userId
  lastName
  firstName
  playerMeta {
    playerId
    verified
    elitePlayer {
      imageUrl
      latestStats {
        team {
          teamData {
            name
            logoUrl
          }
        }
      }
    }
  }
  profilePicture
}`;

const userCompactFields: string = `{
  userId
  lastName
  firstName
  playerMeta {
    playerId
    verified
    elitePlayer {
      imageUrl
      latestStats {
        team {
          teamData {
            name
            logoUrl
          }
        }
      }
    }
  }
  profilePicture
  userPayment {
    subscriptions {
      items {
        data {
          price {
            productData {
              subscriptionData {
                id
                name
              }
            }
          }
        }
      }
    }
  }
}`;

const reportListFields: string = `{
  id
  scoutDate
  skills {
    total
  }
  player ${userCompactFields}
  creator {
    firstName
    lastName
    userId
  }
}`;

const reportDetailsFields: string = `{
  skills {
    skatingMechanics
    control
    speed
    aggressiveness
    battle
    persistence
    vision
    position
    execution
    puckHandling
    passing
    shooting
    total
  }
  scoutComment
  longRangePotential
  recommendation
  id
  scoutDate
  game
}`;

const userFields: string = `{
  userId
  lastName
  email
  firstName
  createdAt
  userGroup {
    groupId
    name
    meta {
      value
      key
    }
  }
  reports ${reportDetailsFields}
  playerMeta {
    playerId
    verified
    elitePlayer {
      imageUrl
      dateOfBirth
      placeOfBirth
      biographyAsHTML
      profileDescriptionAsHTML
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
  profile ${profileFields}
  profilePicture
  phoneNumber
  userPayment {
    subscriptions {
      items {
        data {
          price {
            productData {
              subscriptionData {
                id
                name
                features
              }
            }
          }
        }
      }
    }
  }
}`;

const elitePlayerFields: string = `{
  id
  name
  userData {
    imageUrl
    dateOfBirth
    biographyAsHTML
    profileDescriptionAsHTML
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
  profile ${profileFields}
}`;

const teamFields: string = `{
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
}`;

export default {
  teamFields,
  profileFields,
  userFields,
  elitePlayerFields,
  reportListFields,
  userLightFields,
  reportDetailsFields
};
