const Community = require('../models/community.model')
const User = require('../models/user.model')


const getAllCommunities = async (req, res) => {

    try {
        const communities = await Community.findAll()
        return res.status(200).json(communities)

    } catch (error) {

        return res.status(500).json({ message: error.message })

    }

}

const getOneCommunity = async (req, res) => {

    try {
        const community = await Community.findByPk(req.params.communityId)

        if (community) {

            return res.status(200).json(community)

        }

        else {

            return res.status(404).json('Community not found')

        }


    } catch (error) {

        return res.status(500).json({ message: error.message })

    }



}

const getOwnCommunities = async (req, res) => {

    try {

        const user = await User.findByPk(res.locals.user.id)

        if (user) {

            const communities = await user.getCommunities()
            return res.status(200).json(communities)

        }
        else {

            return res.status(404).json('User not found.')

        }

    } catch (error) {

        return res.status(500).json({ message: error.message })

    }


}

const createOneCommunity = async (req, res) => {

    try {

        const community = await Community.create(req.body)
        return res.status(200).json(community)

    } catch (error) {

        return res.status(500).json({ message: error.message })

    }

}

const createOwnCommunity = async (req, res) => {

    try {

        const user = await User.findOne({ where: { id: res.locals.user.id } })

        if (user) {
            if (res.locals.user.role === 'directive communer') {

                const newCommunity = await user.createCommunity(req.body)
                return res.status(200).json(newCommunity)

            }
            else {

                return res.status(401).json('User Not allowed to create a community')

            }

        }
        else {

            return res.status(404).json('User not found.')

        }


    } catch (error) {

        return res.status(500).json({ message: error.message })

    }

}

const updateOneCommunity = async (req, res) => {

    try {

        const community = await Community.update(req.body, {

            where: { id: req.params.communityId }
        })

        if (community) {

            return res.status(200).json('Community updated.')
        }
        else {

            return res.status(404).json('Community not Found.')
        }

    } catch (error) {

        return res.status(500).json(error.message)

    }

}

const updateOwnCommunities = async (req, res) => {

    try {

        const user = await User.findByPk(res.locals.user.id)
        if (!user) {
            return res.status(404).json('User not found.')
        }

        const community = await Community.findByPk(req.params.communityId)
        if (!community) {
            return res.status(404).json('Community not found.')
        }

        const isCommunityAssociated = await user.hasCommunity(community);
        if (!isCommunityAssociated) {
            return res.status(404).json('No asociation found between user and comunity')
        }

        const communityUpdated = await community.update(req.body);
        if (!communityUpdated) {
            return res.status(404).json('Community wasnt updated.')
        }

        return res.status(200).json({ message: 'success updating', communityUpdated: communityUpdated, });


    } catch (error) {

        return res.status(500).json(error.message)

    }

}

const deleteOneCommunity = async (req, res) => {

    try {

        const community = await Community.destroy({

            where: {
                id: req.params.communityId
            }

        })

        if (community) {

            return res.status(200).json('Community Deleted.')
        }
        else {

            return res.status(404).json('Community not Found.')
        }

    } catch (error) {

        return res.status(500).json(error.message)

    }

}

const deleteOwnCommunities = async (req, res) => {

    try {

        const userIdd = res.locals.user.id
        const communityIdd = req.params.communityId

        const user = await User.findByPk(userIdd)
        if (!user) {
            return res.status(404).json('User not found.')
        }
        const community = await Community.findByPk(communityIdd)
        if (!community) {
            return res.status(404).json('Community not found.')
        }
        const isCommunityAssociated = await user.hasCommunity(community)
        if (!isCommunityAssociated) {
            return res.status(404).json('No asociation found between user and comunity')
        }
        const communityDeleted = await community.destroy(communityIdd)
        if (!communityDeleted) {
            return res.status(404).json('Community wasnt deleted.')
        }

        return res.status(200).json('Community was deleted successfully.')

    } catch (error) {

        return res.status(500).json(error.message)

    }

}


module.exports = { getAllCommunities, getOwnCommunities, getOneCommunity, createOwnCommunity, createOneCommunity, updateOneCommunity, updateOwnCommunities, deleteOneCommunity, deleteOwnCommunities, } // metodos 