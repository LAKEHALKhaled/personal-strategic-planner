import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      areas {
        _id
        areaText
        createdAt
      }
    }
  }
`;

export const QUERY_AREAS = gql`
  query getAreas {
    areas {
      _id
      areaText
      areaAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_AREA = gql`
  query getSingleArea($areaId: ID!) {
    area(areaId: $areaId) {
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      areas {
        _id
        areaText
        areaAuthor
        createdAt
      }
    }
  }
`;
