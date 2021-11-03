import { gql } from "apollo-server"

// 유저와 정보 GraphQL
export default gql`
    type Query{
        see: String!
    }
    type User {
        id: Int!
        email: String!
        Content: [Content]
        createdAt: String!
        updatedAt: String!
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
    }
`