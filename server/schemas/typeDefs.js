const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    areas: [Area]!
  }

  type Area {
    _id: ID
    areaText: String
    areaAuthor: String
    createdAt: String
    goals: [Goal]!
  }

  type Goal {
    _id: ID
    goalText: String
    goalAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    areas(username: String): [Area]
    area(areaId: ID!): Area
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addArea(areaText: String!, areaAuthor: String!): Area
    addGoal(
      areaId: ID!
      goalText: String!
      goalAuthor: String!
    ): Area
    removeArea(areaId: ID!): Area
    removeGoal(areaId: ID!, goalId: ID!): Area
  }
`;

module.exports = typeDefs;
