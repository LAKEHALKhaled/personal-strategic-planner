import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_AREA = gql`
  mutation addArea($areaText: String!, $areaAuthor: String!) {
    addArea(areaText: $areaText, areaAuthor: $areaAuthor) {
      _id
      areaText
      areaAuthor
      createdAt
      goals {
        _id
        goalText
      }
    }
  }
`;

export const ADD_GOAL = gql`
mutation addGoal(
  $areaId: ID!
  $goalText: String!
  $goalAuthor: String!
) {
  addGoal(
    areaId: $areaId
    goalText: $goalText
    goalAuthor: $goalAuthor
  ) {
    _id
    areaText
    areaAuthor
    createdAt
    goals {
      _id
      goalText
      createdAt
    }
  }
}
`;
export const REMOVE_AREA = gql`
  mutation removeArea($areaId: ID!) {
    removeArea(areaId: $areaId) {
      _id
      areaText
      areaAuthor
      createdAt
      goals {
        _id
        goalText
      }
    }
  }
`;

export const REMOVE_GOAL = gql`
  mutation removeGoal($areaId: ID!, $goalId: ID!) {
    removeGoal(areaId: $areaId, goalId: $goalId) {
      _id
      areaText
      areaAuthor
      createdAt
      goals {
        _id
        goalText
      }
    }
  }
`;