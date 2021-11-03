import client from "../../client"


export default {
  Mutation: {
    deleteContent: async(
      _,
      {id}
    ) => {
      await client.content.delete({
        where:{
          id:1,
        }
      })
      return{
        result: false,
        error: "Can't delete Contents"
      }
    }
  }
}