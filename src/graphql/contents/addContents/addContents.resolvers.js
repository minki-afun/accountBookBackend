import client from "../../client"
import { protect } from "../../graphqlUtils"


export default {
  Mutation: {
    addContents: protect(
    async(
      _,
      {product, price, text, date},
      {loggedInUser}
      ) => {
        console.log(loggedInUser.id)
        try {
          if(product !== "" && price !== 0 && date !== 0){
            const checkBeforeAdd = await client.content.create({
              data:{
                product,
                price,
                text,
                date,
                sign:true,
                userId: loggedInUser.id,
              }
            })
            console.log(checkBeforeAdd)
            
            return{
              result:true,
              error:"등록이 완료되었습니다."
            }
          }
          
        } catch (error) {
          console.log(error)
        }
        
      return{
        result:false,
        error: "값을 제대로 입력해주세요."
      }
    }
    )
  }
}