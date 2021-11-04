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
`