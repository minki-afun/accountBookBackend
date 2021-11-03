import { gql } from "apollo-server-core";

export default gql`

  type Mutation{
    addContents(
      product: String!
      price: Int!
      text: String
      date: Int
      
    ): MutationResponse!
  }
`