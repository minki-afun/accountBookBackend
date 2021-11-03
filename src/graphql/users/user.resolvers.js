import client from "../client"

export default {
    Query: {
        seeUsers: async( () => {
            const userList = await client.user.findMany()
            if(!userList) {
                return {
                    result: false,
                    error: "No one..."
                }
            }
            return {
                result: true,
                error: null
            }
        })
    }
}