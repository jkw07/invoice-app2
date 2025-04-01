import { gql } from "@apollo/client";

export const GET_DEFAULT_COMPANY = gql`
  query GetDefaultCompanyByUser {
    getDefaultCompanyByUser {
      id
    }
  }
`;
