import client from "../../client"


export default {
  Mutation: {
    addContents: async(
      _,
      {product, price, text}
      ) => {
        await client.content.create({
        data:{
          product,
          price,
          text,
          sign: true,
          date: 2020,
          userId: 1
        }
      })
      return{
        result: false,
        error: "Can't add to account-book"
      }
    }
  }
}