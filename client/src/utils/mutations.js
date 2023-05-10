import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        email
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $bookId: String
    $title: String
    $description: String
    $link: String
    $image: String
    $authors: [String]
  ) {
    saveBookt(
      bookId: $bookId
      title: $title
      description: $description
      link: $link
      image: $image
      authors: $authors
    ) {
      _id
      username
      email
      password
      savedBooks {
        bookId
        title
        description
        link
        image
        authors
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: String) {
    removeBook(bookId: $bookId) {
      email
      username
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
`;
