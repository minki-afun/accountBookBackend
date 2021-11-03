// env 사용
require("dotenv").config()
import http from "http"
import express from "express"
import logger from "morgan"
import { ApolloServer } from "apollo-server-express"

// 파일 가져오기
import { typeDefs, resolvers } from "./src/graphql/schema"
import { getUser } from "./src/graphql/graphqlUtils"

// 포트 설정
const PORT = process.env.PORT || 3000

// 아폴로 서버
const apollo = new ApolloServer({
  resolvers,
  typeDefs,
  context: async (ctx) => {
    if (ctx.req) {
      return {
        loggedInUser: await getUser(ctx.req.headers.token),
      }
    } else {
      const { connection: { context }} = ctx;
      return {
        loggedInUser: context.loggedInUser,
      }
    }
  }
})

// 익스프레스 세팅
const app = express()

// 로그 상태 창
app.use(logger("tiny"))
// 아폴로와 app 미들웨어 세팅
apollo.applyMiddleware({ app })

// http Server 연결
const httpServer = http.createServer(app)
// apollo.installSubscriptionHandlers(httpServer);

// 포트 listen
httpServer.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT} 🚀`)
  console.log(`🚀 GraphQL PlayGround is running on http://localhost:${PORT}/graphql 🚀`)
})
