import client from "../../client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { apollo } from "../../../../server"

export default {
    Mutation: {
        login: async (_, { email, password }) => {
            // 유저확인
            const user = await client.user.findUnique({
                where: {
                    email
                }
            })
            if (!user) {
                return {
                    result: false,
                    error: "해당 아이디가 없습니다."
                }
            }
            // 비밀번호 확인
            const passwordResult = await bcrypt.compare(password, user.password)
            if (!passwordResult) {
                return {
                    result: false,
                    error: "비밀번호가 다릅니다."
                }
            }
            // 로그인하기
            const token = await jwt.sign({id : user.id}, process.env.SECRET_KEY)
            return {
                result: true,
                token: token
            }
        },
        logout: async (_, __, context, info) => {
            if(context.loggedInUser) {
                context.loggedInUser = null
                return {
                    result: true
                }
            }
            return {
                result: false,
                error: "로그아웃 실패 혹은 토큰이 없습니다."
            }
        }
    }
}