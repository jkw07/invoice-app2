import { gql } from "@apollo/client";

export const CLIENT_BASIC_FIELDS = gql`
  fragment ClientBasicFields on Client {
    id
    name
    tin
    street
    buildingNo
    apartmentNo
    zipCode
    city
    email
    phone
  }
`;

export const CLIENT_FULL_FIELDS = gql`
  fragment ClientBasicFields on Client {
    id
    name
    tin
    bin
    street
    buildingNo
    apartmentNo
    zipCode
    city
    province
    county
    municipality
    email
    phone
  }
`;
