const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const SupplierOffer = connection.define('Supplier_Offer', {

    quantity_offered: {

        type: DataTypes.DOUBLE,
        notNull: true,

    },

    offered: {

        type: DataTypes.BOOLEAN,
        defaultValue: false

    },

    hired: {

        type: DataTypes.BOOLEAN,
        defaultValue: false

    }

})




module.exports = SupplierOffer; 