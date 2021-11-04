import client from "../client"

export default {
  Query: {
    seeContents: async(_,{id}) => {
      return client.content.findUnique({
        where:{
          id,
        }
      })
      
    }
  },
  Content: {
    total: async({id}, _, { loggedInUser }) => {
      const contents = await client.content.findMany({
        where: {
          id
        }
      })
      console.log(contents)
      return 1
    }
  }
}