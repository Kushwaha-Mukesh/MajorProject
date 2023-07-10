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
