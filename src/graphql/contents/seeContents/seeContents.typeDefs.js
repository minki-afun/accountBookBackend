import { gql } from "apollo-server";


export default gql`
 type Query {
   products(id: Int!): Content!
 }
`