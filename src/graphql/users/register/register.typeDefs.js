import { gql } from "apollo-server";

// 계정 만들기
export default gql`
    type Mutation {
        createAccount(
            email: String!
            password: String!
        ): MutationResponse!
    }
`