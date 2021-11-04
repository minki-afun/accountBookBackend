import client from "../client"

export default {
  Query: {
    // Content 보기
    seeContents: async(_,{id}) => {
      return client.content.findUnique({
        where:{
          id,
        }
      })
      
    }
  },
  Content: {
    // 총합
    total: async(root, _, { loggedInUser }) => {
      const contents = await client.content.findMany({
        where: {
          userId: loggedInUser.id
        }
      })
      let total_money = contents.map((ctx) => {
        return ctx.price
      })
      let sum = total_money.reduce((acc, val) => {
        return acc + val
      })
      return sum
    },
    // 지출 합
    minusTotal: async(root, _, {loggedInUser}) => {
      const contents = await client.content.findMany({
        where: {
          userId: loggedInUser.id
        }
      })
      let indexContents = contents.map((ctx) => {
        return { price: ctx.price, sign: ctx.sign }
      })
      let minus = indexContents.map((ctx) => {
        if(!ctx.sign) { return ctx.price }
        return 0
      })
      let min = minus.reduce((acc, val) => {
        return acc + val
      })
      return min
    },
    // 수입 합
    plusTotal: async(root, _, {loggedInUser}) => {
      const contents = await client.content.findMany({
        where: {
          userId: loggedInUser.id
        }
      })
      let indexContents = contents.map((ctx) => {
        return { price: ctx.price, sign: ctx.sign }
      })
      let minus = indexContents.map((ctx) => {
        if(ctx.sign) { return ctx.price }
        return 0
      })
      let max = minus.reduce((acc, val) => {
        return acc + val
      })
      return max
    }
  }
}