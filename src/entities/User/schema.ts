import { gql } from "apollo-server";

export const UserSchema = gql`
  type User {
    id: Int!
    email: String!
    username: String!
    password: String!
    active: Boolean!
    its: String!
    uts: String
    dts: String
    # matches: PlayerMatch
  }

  input UserCreateInput {
    email: String!
    username: String!
    password: String!
  }

  input UserEditInput {
    id: Int!
    email: String
    username: String
    password: String
    active: Boolean
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(input: UserCreateInput): User
    editUser(input: UserEditInput): User
  }
`