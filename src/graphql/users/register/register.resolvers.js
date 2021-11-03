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
                const existingEmail = await client.user.findUnique({
                    where: {
                        email
                    }
                })
                if (existingEmail) {
                    throw new Error("이미 사용중인 이메일입니다.")
                }
                const passwordHash = await bcrypt.hash(password, 10)
                try {
                    await client.user.create({
                        data: {
                            email,
                            password: passwordHash,
                        }
                    })
                    return {
                        result: true,
                    }
                } catch (error) {
                    console.log(error)
                }
            } catch (e) {
                return e
            }
        }
    }
}