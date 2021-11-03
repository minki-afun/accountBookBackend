import client from "../../client"


export default {
  Mutation: {
    editContent: async(
      _,
      {product, price, text, date},
    ) => {
      const testEdit = await client.content.update({
        where:{
          id:1, //로그인한 아이디로 수정해야함
        },
        data:{
          product,
          price,
          text,
          sign:true,
          date,
          userId:1, //로그인한 아이디로 수정해야함
        }
      })
      console.log(testEdit)
      return{
        result:false,
        error: "Can't edit Content"
      }

    }
  }
}