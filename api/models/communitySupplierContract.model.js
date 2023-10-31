const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')


const CommunitySupplierContract = connection.define('Community_Supplier_Contract', {

    anual_contract_value: {

        type: DataTypes.DOUBLE,
        notNull: true

    },

    contractValue_communitySurface_ratio: {

        type: DataTypes.DOUBLE,
        notNull: true

    }

},{timestamps:false})


module.exports = CommunitySupplierContract 