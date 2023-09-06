/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateThingsSchema = /* GraphQL */ `
  subscription OnCreateThingsSchema(
    $filter: ModelSubscriptionThingsSchemaFilterInput
    $owner: String
  ) {
    onCreateThingsSchema(filter: $filter, owner: $owner) {
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
export const onUpdateThingsSchema = /* GraphQL */ `
  subscription OnUpdateThingsSchema(
    $filter: ModelSubscriptionThingsSchemaFilterInput
    $owner: String
  ) {
    onUpdateThingsSchema(filter: $filter, owner: $owner) {
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
export const onDeleteThingsSchema = /* GraphQL */ `
  subscription OnDeleteThingsSchema(
    $filter: ModelSubscriptionThingsSchemaFilterInput
    $owner: String
  ) {
    onDeleteThingsSchema(filter: $filter, owner: $owner) {
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
export const onCreateSensorInfo = /* GraphQL */ `
  subscription OnCreateSensorInfo($id: String, $Status: String) {
    onCreateSensorInfo(id: $id, Status: $Status) {
      id
      Status
      __typename
    }
  }
`;
export const onUpdateSensorInfo = /* GraphQL */ `
  subscription OnUpdateSensorInfo($id: String, $Status: String) {
    onUpdateSensorInfo(id: $id, Status: $Status) {
      id
      Status
      __typename
    }
  }
`;
export const onDeleteSensorInfo = /* GraphQL */ `
  subscription OnDeleteSensorInfo($id: String, $Status: String) {
    onDeleteSensorInfo(id: $id, Status: $Status) {
      id
      Status
      __typename
    }
  }
`;
