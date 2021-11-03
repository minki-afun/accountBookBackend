import { gql } from "apollo-server"

export default gql`
    type LoginResult {
        result: Boolean!
        token: String
        error: String
    }
    type Mutation {
        login(email: String!, password: String!): LoginResult!
        logout: LoginResult!
    }
`