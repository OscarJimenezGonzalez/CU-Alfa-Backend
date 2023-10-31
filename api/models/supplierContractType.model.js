const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const SupplierContractType = connection.define('Supplier_Contract_type', {

    name: {

        type: DataTypes.STRING,
        notNull: true

    }

}, {
    timestamps: false,
})



module.exports = SupplierContractType