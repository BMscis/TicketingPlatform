/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEVENTS = /* GraphQL */ `
  query GetEVENTS($id: ID!) {
    getEVENTS(id: $id) {
      id
      AWSUSER
      WALLETADDRESS
      CONTRACTADDRESS
      TOKENID
      EVENTNAME
      EVENTLOCATION
      PRICE
      TICKETNUMBER
      TICKETSOLD
      EVENTIMAGE
      EVENTDETAILS
      ARTISTS
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEVENTS = /* GraphQL */ `
  query ListEVENTS(
    $filter: ModelEVENTSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEVENTS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        AWSUSER
        WALLETADDRESS
        CONTRACTADDRESS
        TOKENID
        EVENTNAME
        EVENTLOCATION
        PRICE
        TICKETNUMBER
        TICKETSOLD
        EVENTIMAGE
        EVENTDETAILS
        ARTISTS
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEVENTS = /* GraphQL */ `
  query SyncEVENTS(
    $filter: ModelEVENTSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEVENTS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        AWSUSER
        WALLETADDRESS
        CONTRACTADDRESS
        TOKENID
        EVENTNAME
        EVENTLOCATION
        PRICE
        TICKETNUMBER
        TICKETSOLD
        EVENTIMAGE
        EVENTDETAILS
        ARTISTS
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
