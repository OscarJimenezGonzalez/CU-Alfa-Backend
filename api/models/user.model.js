const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')


const User = connection.define('User', {


    dni: {
        type: DataTypes.STRING,
        unique: true,
        notNull: true,
    },
    name: {
        type: DataTypes.STRING,
        notNull: true
    },
    last_name: {
        type: DataTypes.STRING,
        notNull: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        notNull: true,
        validate: { isEmail: true }
    },
    password: {
        type: DataTypes.STRING,
        notNull: true
    },
    role: {
        type: DataTypes.ENUM('admin', 'communer', 'directive communer', 'supplier'),
        defaultValue: "communer"
    },
    contact_number: {
        type: DataTypes.INTEGER,
        notNull: true
    }
}, {
    timestamps: false,
})

module.exports = User











