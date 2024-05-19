import { hashPassword } from "../../Adapters/Utils/bycript.js"
import User from "../../Entity/users/user.js"

export class useCaseUser {
    constructor({ repository }) {
        this.repository = repository
    }

    async getUsers() {
        const users = await this.repository.getUsers()
        return users
    }

    async getUser({ id }) {
        const user = await this.repository.getUser(id)
        return user
    }

    async saveUser({ input }) {

        const { username, password } = input

        const hash = await hashPassword(password)

        const newUser = new User(username, hash)

        const result = await this.repository.saveUser(newUser)

        return result
    }
}