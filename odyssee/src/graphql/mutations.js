/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOdysse = /* GraphQL */ `
  mutation CreateOdysse(
    $input: CreateOdysseInput!
    $condition: ModelOdysseConditionInput
  ) {
    createOdysse(input: $input, condition: $condition) {
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
export const updateOdysse = /* GraphQL */ `
  mutation UpdateOdysse(
    $input: UpdateOdysseInput!
    $condition: ModelOdysseConditionInput
  ) {
    updateOdysse(input: $input, condition: $condition) {
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
export const deleteOdysse = /* GraphQL */ `
  mutation DeleteOdysse(
    $input: DeleteOdysseInput!
    $condition: ModelOdysseConditionInput
  ) {
    deleteOdysse(input: $input, condition: $condition) {
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
export const createUserHistory = /* GraphQL */ `
  mutation CreateUserHistory(
    $input: CreateUserHistoryInput!
    $condition: ModelUserHistoryConditionInput
  ) {
    createUserHistory(input: $input, condition: $condition) {
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
export const updateUserHistory = /* GraphQL */ `
  mutation UpdateUserHistory(
    $input: UpdateUserHistoryInput!
    $condition: ModelUserHistoryConditionInput
  ) {
    updateUserHistory(input: $input, condition: $condition) {
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
export const deleteUserHistory = /* GraphQL */ `
  mutation DeleteUserHistory(
    $input: DeleteUserHistoryInput!
    $condition: ModelUserHistoryConditionInput
  ) {
    deleteUserHistory(input: $input, condition: $condition) {
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
export const createAchievements = /* GraphQL */ `
  mutation CreateAchievements(
    $input: CreateAchievementsInput!
    $condition: ModelAchievementsConditionInput
  ) {
    createAchievements(input: $input, condition: $condition) {
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
export const updateAchievements = /* GraphQL */ `
  mutation UpdateAchievements(
    $input: UpdateAchievementsInput!
    $condition: ModelAchievementsConditionInput
  ) {
    updateAchievements(input: $input, condition: $condition) {
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
export const deleteAchievements = /* GraphQL */ `
  mutation DeleteAchievements(
    $input: DeleteAchievementsInput!
    $condition: ModelAchievementsConditionInput
  ) {
    deleteAchievements(input: $input, condition: $condition) {
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
