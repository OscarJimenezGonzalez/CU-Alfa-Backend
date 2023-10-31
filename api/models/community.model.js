const { DataTypes } = require('sequelize')
const { connection } = require('../../database/index')

const Community = connection.define('Community', {

    CIF: {

        type: DataTypes.STRING,
        notNull: true,
        unique: true

    }, name: {

        type: DataTypes.STRING,
        notNull: true,
        unique: true

    }, address: {

        type: DataTypes.STRING,
        notNull: true,
        unique: true

    }, location: {

        type: DataTypes.STRING,
        notNull: true

    }, zip_code: {

        type: DataTypes.INTEGER,
        notNull: true

    }, anual_totalBudget: {

        type: DataTypes.DOUBLE,
        notNull: true

    }, anual_totalExpenses: {

        type: DataTypes.DOUBLE,
        notNull: true

    }, community_surface: {

        type: DataTypes.DOUBLE,
        notNull: true

    }

}, {
    timestamps: false

})

module.exports = Community;