import { DataTypes, Model } from 'sequelize'
import ConnectionDatabase from '../../Frameworks/Database/sql.js';

const database = new ConnectionDatabase()
const sequelize = database.getInstace()

class User extends Model { }

User.init(
    {
        id_user: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'Users',
    },
);

export default User