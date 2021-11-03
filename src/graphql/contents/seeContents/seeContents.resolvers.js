import client from "../../client"

export default {
  Query: {
    products: async(_, { id }) => {
      await client.content.findMany({
        
      })
    }
  }
}