import { gql } from "apollo-server"

// 유저와 정보 GraphQL
export default gql`
  type isLoginResult {
    result: Boolean!
    user: User
    error: String
  }
  type Query {
    isLogin: isLoginResult!
    userData(id: Int!): User!
  }
  type User {
    id: Int!
    email: String!
    Content: [Content]
    createdAt: String!
    updatedAt: String!
  }
`
