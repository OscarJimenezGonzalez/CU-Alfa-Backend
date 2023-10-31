const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')
const { timeStamp } = require('console')


const SupplierCompany = connection.define('Supplier_Company', {

    CIF: {

        type: DataTypes.STRING,
        notNull: true,
        unique: true

    },
    name: {

        type: DataTypes.STRING,
        notNull: true,
        unique: true

    },
    location: {

        type: DataTypes.STRING,
        notNull: true

    }


}, {
    timestamps: false,
})

module.exports = SupplierCompany;