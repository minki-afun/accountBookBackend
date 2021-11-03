import client from "../../client"
import bcrypt from "bcrypt"

export default {
    Mutation: {
        // 계정 만들기
        createAccount: async (
            _,
            { email, password }
        ) => {
            try {
                const existingEmail = await client.user.findFirst({
                    where: {
                        email
                    }
                })
                if (existingEmail) {
                    throw new Error("이미 사용중인 이메일입니다.")
                }
                const passwordHash = await bcrypt.hash(password, 10)
                return client.user.create({
                    data: {
                        email,
                        password: passwordHash,
                    }
                })
            } catch (e) {
                return e
            }
        }
    }
}