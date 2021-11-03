import jwt from "jsonwebtoken"
import client from "./client"

// JWT토큰이 있다면 아이디를 추출해 유저 정보를 가져오기
export const getUser = async (token) => {
    try {
        if(!token) {
            return null
        }
        const { id } = await jwt.verify(token, process.env.SECRET_KEY)
        const user = await client.user.findUnique({ where: { id }})
        if (user) {
            return user
        } else {
            return null
        }
    } catch {
        return null
    }
}

// 로그인한 상태여야지 그다음 함수 사용가능한 함수
export function protect(ourResolver) {
    return function (root, args, context, info) {
        if (!context.loggedInUser) {
            const query = info.operation.operation === "query"
            if (query) {
                return null
            } else {
                return { 
                    result: false,
                    error: "Please login."
                }
            }
        }
        return ourResolver(root, args, context, info)
    }
}