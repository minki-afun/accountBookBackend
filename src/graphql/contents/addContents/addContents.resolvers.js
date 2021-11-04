import client from "../../client"
import { protect } from "../../graphqlUtils"


export default {
  Mutation: {
    addContents: protect(async(
      _,
      {product, price, text, date, sign},
      {loggedInUser}
      ) => {
        console.log(loggedInUser);
        await client.content.create({
        data:{
          product,
          price,
          text,
          sign,
          date,
          userId: loggedInUser.userId
        }
      })
      return{
        result: false,
        error: "Can't add to account-book"
      }
    })
  }
}