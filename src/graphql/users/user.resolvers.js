import client from "../client"

export default {
  Query: {
    // 로그인 했는지 토큰을 확인
    isLogin: (_, __, ctx) => {
      const Users = ctx.loggedInUser
      console.log(Users)
      if (Users) {
        return {
          result: true,
          user: Users,
        }
      }
      return {
        result: false,
        error: "로그인 하세요.",
      }
    },

    userData: async (_, { id }, { loggedInUser }) => {
      return client.user.findUnique({
        where: {
          id,
        },
      })
    },

    checkIdExist: async (_, { email }) => {
      const UserExist = await client.user.findUnique({
        where: {
          email,
        },
      })
      if (UserExist) {
        return {
          result: false,
          error: "이메일이 존재합니다",
        }
      }

      return {
        result: true,
        error: "사용 가능합니다",
      }
    },
  },
}
