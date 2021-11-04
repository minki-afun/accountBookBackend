import client from "../../client"
import { protect } from "../../graphqlUtils"

export default {
  Mutation: {
    deleteContent: protect(
      async(
      _,
      {id},
    ) => {
      const checkId = await client.content.findUnique({
        where:{
          id,
        }
      })
      console.log(checkId)
      if(!checkId){
        return{
          result: false,
          error: "삭제할 수 없습니다.",
        }
      }
      await client.content.delete({
        where:{
          id,
        }
      })
      return{
        result: true,
        error: "삭제가 완료되었습니다."
      }
    }
    )
  }
}