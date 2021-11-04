import client from "../../client"

export default {
  Query: {
    detailContent: async (_,{id}) => {
      return client.content.findUnique({
        where:{
          id,
        }
      })
    }
  }
}