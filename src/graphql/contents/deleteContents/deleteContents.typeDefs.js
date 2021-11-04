import { gql } from "apollo-server-core";

export default gql`
  type deleteContentResult{
    result: Boolean!
    error: String
  }

  type Mutation{
    deleteContent(id:Int!): MutationResponse!
  }

`