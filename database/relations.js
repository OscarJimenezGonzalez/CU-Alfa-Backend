const User = require('../api/models/user.model')
const Community = require('../api/models/community.model')
const CommunitySupplierContract = require('../api/models/communitySupplierContract.model')
const SupplierCompany = require('../api/models/supplierCompany.model')
const SupplierContractType = require('../api/models/supplierContractType.model')
const SupplierOffer = require('../api/models/supplierOffer.model')

function addRelationsToModels () {
    try {
        
        User.belongsToMany(Community, {through: 'user_community'})
        Community.belongsToMany(User,{through: 'user_community'})
        
        User.hasMany(SupplierCompany)
        SupplierCompany.belongsTo(User)

        SupplierCompany.hasMany(CommunitySupplierContract)
        CommunitySupplierContract.belongsTo(SupplierCompany)

        Community.hasMany(CommunitySupplierContract)
        CommunitySupplierContract.belongsTo(Community)

        SupplierContractType.hasMany(CommunitySupplierContract)
        CommunitySupplierContract.belongsTo(SupplierContractType)

        SupplierContractType.hasMany(SupplierOffer)
        SupplierOffer.belongsTo(SupplierContractType)

        SupplierCompany.hasMany(SupplierOffer)
        SupplierOffer.belongsTo(SupplierCompany)

        Community.hasMany(SupplierOffer)
        SupplierOffer.belongsTo(Community)


        console.log('Relations added correctly.')

    } catch (error) {
        throw error
    }
}

module.exports = addRelationsToModels