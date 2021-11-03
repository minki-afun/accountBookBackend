import { gql } from "apollo-server-core";

export default gql`
  type Mutation{
    deleteContent(id:Int!): MutationResponse!
  }

`