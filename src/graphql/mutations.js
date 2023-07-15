/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createThingsSchema = /* GraphQL */ `
  mutation CreateThingsSchema(
    $input: CreateThingsSchemaInput!
    $condition: ModelThingsSchemaConditionInput
  ) {
    createThingsSchema(input: $input, condition: $condition) {
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
export const updateThingsSchema = /* GraphQL */ `
  mutation UpdateThingsSchema(
    $input: UpdateThingsSchemaInput!
    $condition: ModelThingsSchemaConditionInput
  ) {
    updateThingsSchema(input: $input, condition: $condition) {
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
export const deleteThingsSchema = /* GraphQL */ `
  mutation DeleteThingsSchema(
    $input: DeleteThingsSchemaInput!
    $condition: ModelThingsSchemaConditionInput
  ) {
    deleteThingsSchema(input: $input, condition: $condition) {
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
export const createSensorInfo = /* GraphQL */ `
  mutation CreateSensorInfo($input: CreateSensorInfoInput!) {
    createSensorInfo(input: $input) {
      id
      Status
      __typename
    }
  }
`;
export const updateSensorInfo = /* GraphQL */ `
  mutation UpdateSensorInfo($input: UpdateSensorInfoInput!) {
    updateSensorInfo(input: $input) {
      id
      Status
      __typename
    }
  }
`;
export const deleteSensorInfo = /* GraphQL */ `
  mutation DeleteSensorInfo($input: DeleteSensorInfoInput!) {
    deleteSensorInfo(input: $input) {
      id
      Status
      __typename
    }
  }
`;
export const createManualSwitch = /* GraphQL */ `
  mutation CreateManualSwitch($input: CreateManualSwitchInput!) {
    createManualSwitch(input: $input) {
      id
      Status
      __typename
    }
  }
`;
export const updateManualSwitch = /* GraphQL */ `
  mutation UpdateManualSwitch($input: UpdateManualSwitchInput!) {
    updateManualSwitch(input: $input) {
      id
      Status
      __typename
    }
  }
`;
export const deleteManualSwitch = /* GraphQL */ `
  mutation DeleteManualSwitch($input: DeleteManualSwitchInput!) {
    deleteManualSwitch(input: $input) {
      id
      Status
      __typename
    }
  }
`;
export const createManualSwitch1 = /* GraphQL */ `
  mutation CreateManualSwitch1($input: CreateManualSwitch1Input!) {
    createManualSwitch1(input: $input) {
      ID
      Status
      __typename
    }
  }
`;
export const updateManualSwitch1 = /* GraphQL */ `
  mutation UpdateManualSwitch1($input: UpdateManualSwitch1Input!) {
    updateManualSwitch1(input: $input) {
      ID
      Status
      __typename
    }
  }
`;
export const deleteManualSwitch1 = /* GraphQL */ `
  mutation DeleteManualSwitch1($input: DeleteManualSwitch1Input!) {
    deleteManualSwitch1(input: $input) {
      ID
      Status
      __typename
    }
  }
`;
export const createManualStatusTable = /* GraphQL */ `
  mutation CreateManualStatusTable($input: CreateManualStatusTableInput!) {
    createManualStatusTable(input: $input) {
      id
      Status
      __typename
    }
  }
`;
export const updateManualStatusTable = /* GraphQL */ `
  mutation UpdateManualStatusTable($input: UpdateManualStatusTableInput!) {
    updateManualStatusTable(input: $input) {
      id
      Status
      __typename
    }
  }
`;
export const deleteManualStatusTable = /* GraphQL */ `
  mutation DeleteManualStatusTable($input: DeleteManualStatusTableInput!) {
    deleteManualStatusTable(input: $input) {
      id
      Status
      __typename
    }
  }
`;
