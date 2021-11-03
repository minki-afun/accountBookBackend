import {gql} from 'apollo-server'

export default gql`
  type Query{
    seeContents(id:Int!, email:String!): MutationResponse!
  }
  type Content {
    id: Int!
    product: String!
    price: Int!
    text: String
    sign: Boolean!
    date: Int!
    user: [User]
    userId: Int!
    createdAt: String!
    updatedAt: String!
  }
`