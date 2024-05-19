import User from "../../../Entity/users/userModel.js"
import ConnectionDatabase from "../../../Frameworks/Database/sql.js"

export default class RepositoryUser {
    constructor() {
        const database = new ConnectionDatabase()
        this.sequelize = database.getInstace()
    }

    async getUsers() {
        try {
            await this.sequelize.sync()
            const users = await User.findAll()
            return users

        } catch (error) {

            throw new Error('Error al obtener los usuarios', { error })
        }
    }

    async getUser(id) {
        try {
            await this.sequelize.sync()
            const user = await User.findByPk(id)
            return user

        } catch (error) {
            throw new Error('Error al obtener el usuarios', { error })
        }
    }

    async saveUser(user) {
        try {
            await this.sequelize.sync()
            await User.create(user)
            return 'Usuario creado con exito'
        } catch (error) {
            console.log(error);
            throw new Error('Error al crear el usuario', { error })
        }

    }
}