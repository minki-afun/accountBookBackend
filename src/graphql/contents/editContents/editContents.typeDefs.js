import { gql } from "apollo-server-core";

export default gql`
  type Mutation{
    editContent(
      id: Int!
      product: String!
      price: Int!
      text: String
      date: Int!
      
    ): MutationResponse!
  }

`