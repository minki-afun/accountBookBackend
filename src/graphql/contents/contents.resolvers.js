import client from "../client"

export default {
  Query: {
    seeContents: async(_,{id}) => {
      const contentsList = await client.content.findMany({
        where:{
          id,
        }
      })
      if(!contentsList) {
        return {
          result: false,
          error: "거래 내역이 없습니다"
        }
      }
      return{
        result: true,
        error: null
      }
    }
  },
  Content: {
    total: ({ id }) => {
      console.log(id)

    }
  }
}