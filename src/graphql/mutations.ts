import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation login($user: CreateUserDto!) {
    login(createUserDto: $user) {
      accessToken
      user {
        name
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation signup($user: CreateUserDto!) {
    signup(createUserDto: $user) {
      name
      email
    }
  }
`;
