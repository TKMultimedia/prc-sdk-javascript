enum QueryFields {
  UserFields = `{
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
      follower {
        count
      }
      following {
        count
      }
      playerId
      userId
    }
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
  }`,
  ElitePlayerFields = `{
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
  }`,
  TeamFields = `{
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
  }`
}

export default QueryFields;
