const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const SupplierOffer = connection.define('Supplier_Offer', {

    quantiy_offered: {

        type: DataTypes.DOUBLE,
        notNull: true,

    },

    hired: {

        type: DataTypes.BOOLEAN,
        notNull: true
    }


})

module.exports = SupplierOffer; 