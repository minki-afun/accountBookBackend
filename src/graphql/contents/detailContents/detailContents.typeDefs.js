import { gql } from "apollo-server";


export default gql`

  type Query{

    detailContent(id: Int!): Content!
  
 }
`