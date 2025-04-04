import { gql } from "@apollo/client";

export const COMPANY_BASIC_FIELDS = gql`
  fragment CompanyBasicFields on Company {
    id
    fullName
  }
`;

export const COMPANY_FULL_FIELDS = gql`
  fragment CompanyFullFields on Company {
    id
    fullName
    shortName
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
