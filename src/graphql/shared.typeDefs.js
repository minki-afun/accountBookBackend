import { gql } from "apollo-server"

// 결과 값 나오는 GraphQL
export default gql`
    type MutationResponse {
        result: Boolean!
        error: String
    }
`
