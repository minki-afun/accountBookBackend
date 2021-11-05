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
  },
}
