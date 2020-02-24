/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncOdysses = /* GraphQL */ `
  query SyncOdysses(
    $filter: ModelOdysseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOdysses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        ParkName
        HuntName
        Landmark
        ItemClass
        Genus
        Species
        Description
        Hints
        GPSCoordLat
        GPSCoordLong
        Image
        MinAltitude
        MaxAltitude
        StartDate
        EndDate
        RarityScore
        DifficultyLevel
        Endemic
        Scavenger
        Predator
        Decomposer
        CarbonHungry
        Flowering
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOdysse = /* GraphQL */ `
  query GetOdysse($id: ID!) {
    getOdysse(id: $id) {
      ParkName
      HuntName
      Landmark
      ItemClass
      Genus
      Species
      Description
      Hints
      GPSCoordLat
      GPSCoordLong
      Image
      MinAltitude
      MaxAltitude
      StartDate
      EndDate
      RarityScore
      DifficultyLevel
      Endemic
      Scavenger
      Predator
      Decomposer
      CarbonHungry
      Flowering
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listOdysses = /* GraphQL */ `
  query ListOdysses(
    $filter: ModelOdysseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOdysses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ParkName
        HuntName
        Landmark
        ItemClass
        Genus
        Species
        Description
        Hints
        GPSCoordLat
        GPSCoordLong
        Image
        MinAltitude
        MaxAltitude
        StartDate
        EndDate
        RarityScore
        DifficultyLevel
        Endemic
        Scavenger
        Predator
        Decomposer
        CarbonHungry
        Flowering
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserHistories = /* GraphQL */ `
  query SyncUserHistories(
    $filter: ModelUserHistoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        username
        GameID
        ParkName
        GamePlayedOn
        Level
        EventType
        HuntName
        HuntDate
        Success
        Image
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserHistory = /* GraphQL */ `
  query GetUserHistory($id: ID!) {
    getUserHistory(id: $id) {
      username
      GameID
      ParkName
      GamePlayedOn
      Level
      EventType
      HuntName
      HuntDate
      Success
      Image
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserHistorys = /* GraphQL */ `
  query ListUserHistorys(
    $filter: ModelUserHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        username
        GameID
        ParkName
        GamePlayedOn
        Level
        EventType
        HuntName
        HuntDate
        Success
        Image
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAchievements = /* GraphQL */ `
  query SyncAchievements(
    $filter: ModelAchievementsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAchievements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        ItemCombo
        AchievementName
        AchievementText
        Image
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAchievements = /* GraphQL */ `
  query GetAchievements($id: ID!) {
    getAchievements(id: $id) {
      ItemCombo
      AchievementName
      AchievementText
      Image
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAchievementss = /* GraphQL */ `
  query ListAchievementss(
    $filter: ModelAchievementsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAchievementss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ItemCombo
        AchievementName
        AchievementText
        Image
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
