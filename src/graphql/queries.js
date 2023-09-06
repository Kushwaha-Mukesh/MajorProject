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
      owner
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
        owner
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
