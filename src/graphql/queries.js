/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getThingsSchema = /* GraphQL */ `
  query GetThingsSchema($id: ID!) {
    getThingsSchema(id: $id) {
      Things_id
      Things
      Status
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listThingsSchemas = /* GraphQL */ `
  query ListThingsSchemas(
    $filter: ModelThingsSchemaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThingsSchemas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Things_id
        Things
        Status
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSensorInfo = /* GraphQL */ `
  query GetSensorInfo($id: String!) {
    getSensorInfo(id: $id) {
      id
      Status
      __typename
    }
  }
`;
export const listSensorInfos = /* GraphQL */ `
  query ListSensorInfos(
    $filter: TableSensorInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSensorInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Status
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getManualSwitch = /* GraphQL */ `
  query GetManualSwitch($id: String!) {
    getManualSwitch(id: $id) {
      id
      Status
      __typename
    }
  }
`;
export const listManualSwitches = /* GraphQL */ `
  query ListManualSwitches(
    $filter: TableManualSwitchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManualSwitches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Status
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getManualSwitch1 = /* GraphQL */ `
  query GetManualSwitch1($ID: String!, $createdAt: String!) {
    getManualSwitch1(ID: $ID, createdAt: $createdAt) {
      ID
      Status
      __typename
    }
  }
`;
export const listManualSwitch1s = /* GraphQL */ `
  query ListManualSwitch1s(
    $filter: TableManualSwitch1FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManualSwitch1s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ID
        Status
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getManualStatusTable = /* GraphQL */ `
  query GetManualStatusTable($id: String!) {
    getManualStatusTable(id: $id) {
      id
      Status
      __typename
    }
  }
`;
export const listManualStatusTables = /* GraphQL */ `
  query ListManualStatusTables(
    $filter: TableManualStatusTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManualStatusTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Status
        __typename
      }
      nextToken
      __typename
    }
  }
`;
