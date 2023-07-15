/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateThingsSchema = /* GraphQL */ `
  subscription OnCreateThingsSchema(
    $filter: ModelSubscriptionThingsSchemaFilterInput
  ) {
    onCreateThingsSchema(filter: $filter) {
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
export const onUpdateThingsSchema = /* GraphQL */ `
  subscription OnUpdateThingsSchema(
    $filter: ModelSubscriptionThingsSchemaFilterInput
  ) {
    onUpdateThingsSchema(filter: $filter) {
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
export const onDeleteThingsSchema = /* GraphQL */ `
  subscription OnDeleteThingsSchema(
    $filter: ModelSubscriptionThingsSchemaFilterInput
  ) {
    onDeleteThingsSchema(filter: $filter) {
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
export const onCreateSensorInfo = /* GraphQL */ `
  subscription OnCreateSensorInfo($id: String) {
    onCreateSensorInfo(id: $id) {
      id
      Status
      __typename
    }
  }
`;
export const onUpdateSensorInfo = /* GraphQL */ `
  subscription OnUpdateSensorInfo($id: String) {
    onUpdateSensorInfo(id: $id) {
      id
      Status
      __typename
    }
  }
`;
export const onDeleteSensorInfo = /* GraphQL */ `
  subscription OnDeleteSensorInfo($id: String) {
    onDeleteSensorInfo(id: $id) {
      id
      Status
      __typename
    }
  }
`;
export const onCreateManualSwitch = /* GraphQL */ `
  subscription OnCreateManualSwitch($id: String, $Status: AWSJSON) {
    onCreateManualSwitch(id: $id, Status: $Status) {
      id
      Status
      __typename
    }
  }
`;
export const onUpdateManualSwitch = /* GraphQL */ `
  subscription OnUpdateManualSwitch($id: String, $Status: AWSJSON) {
    onUpdateManualSwitch(id: $id, Status: $Status) {
      id
      Status
      __typename
    }
  }
`;
export const onDeleteManualSwitch = /* GraphQL */ `
  subscription OnDeleteManualSwitch($id: String, $Status: AWSJSON) {
    onDeleteManualSwitch(id: $id, Status: $Status) {
      id
      Status
      __typename
    }
  }
`;
export const onCreateManualSwitch1 = /* GraphQL */ `
  subscription OnCreateManualSwitch1(
    $ID: String
    $createdAt: String
    $Status: AWSJSON
  ) {
    onCreateManualSwitch1(ID: $ID, createdAt: $createdAt, Status: $Status) {
      ID
      Status
      __typename
    }
  }
`;
export const onUpdateManualSwitch1 = /* GraphQL */ `
  subscription OnUpdateManualSwitch1(
    $ID: String
    $createdAt: String
    $Status: AWSJSON
  ) {
    onUpdateManualSwitch1(ID: $ID, createdAt: $createdAt, Status: $Status) {
      ID
      Status
      __typename
    }
  }
`;
export const onDeleteManualSwitch1 = /* GraphQL */ `
  subscription OnDeleteManualSwitch1(
    $ID: String
    $createdAt: String
    $Status: AWSJSON
  ) {
    onDeleteManualSwitch1(ID: $ID, createdAt: $createdAt, Status: $Status) {
      ID
      Status
      __typename
    }
  }
`;
export const onCreateManualStatusTable = /* GraphQL */ `
  subscription OnCreateManualStatusTable($id: String, $Status: String) {
    onCreateManualStatusTable(id: $id, Status: $Status) {
      id
      Status
      __typename
    }
  }
`;
export const onUpdateManualStatusTable = /* GraphQL */ `
  subscription OnUpdateManualStatusTable($id: String, $Status: String) {
    onUpdateManualStatusTable(id: $id, Status: $Status) {
      id
      Status
      __typename
    }
  }
`;
export const onDeleteManualStatusTable = /* GraphQL */ `
  subscription OnDeleteManualStatusTable($id: String, $Status: String) {
    onDeleteManualStatusTable(id: $id, Status: $Status) {
      id
      Status
      __typename
    }
  }
`;
