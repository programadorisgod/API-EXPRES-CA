import { Sequelize } from "sequelize"
export default class ConnectionDatabase {
    static instance = null
    constructor() {
        if (!ConnectionDatabase.instance) {
            this.sequelize = new Sequelize('backend', 'camidev', 'YourStrong#Password', {
                host: 'localhost',
                port: 1433,
                dialect: 'mssql'
            })

            this.sequelize.authenticate()
                .then(() => console.log('Conexión exitosa'))
                .catch(err => console.error('Unable to connect to the database:', err))

            ConnectionDatabase.instance = this
        }
        return ConnectionDatabase.instance
    }

    getInstace() {
        return this.sequelize
    }
}
