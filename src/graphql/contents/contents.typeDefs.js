import { gql } from "apollo-server"

export default gql`
  type Query {
    seeContents(userId: Int!): [Content!]
    seeBalance(userId: Int!): Content!
  }
  type Content {
    id: Int!
    product: String!
    price: Int!
    text: String
    sign: Boolean!
    date: Int!
    user: [User]
    userId: Int!
    createdAt: String!
    updatedAt: String!
    total: Int!
    minusTotal: Int!
    plusTotal: Int!
  }
`
