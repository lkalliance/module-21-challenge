import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      username
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
