import client from "../../client"
import { protect } from "../../graphqlUtils"

export default {
  Mutation: {
    editContent:protect( 
    async(
      _,
      {id,product, price, text, date},
    ) => {
      const checkId = await client.content.findUnique({
        where:{
          id,
        },
      })
      if(!checkId){
        return{
          result: false,
          error: "내역을 찾을 수 없습니다.",
        }
      }
      if(product !== "" && price !== 0 && date !== 0){
        await client.content.update({
          where:{
            id,
          },  
          data:{
            product,
            price,
            text,
            date,
          },
        })
        return{
          result:true,
          error:"수정이 완료되었습니다."
        }
      }
      return{
        result:false,
        error: "값을 제대로 입력해주세요."
      }
      }
    )
  }
}