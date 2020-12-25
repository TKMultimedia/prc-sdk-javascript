const profileFields: string = `{
  ratingPoint
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

const reportCompactFields: string = `{
  id
  skills {
    total
  }
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
  reports ${reportCompactFields}
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
  elitePlayerFields
};
