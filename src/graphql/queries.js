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
