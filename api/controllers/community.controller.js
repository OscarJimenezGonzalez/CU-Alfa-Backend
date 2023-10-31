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

            return res.status(200).json(communities)

        }

        else {

            return res.status(404).json('Community not found')

        }


    } catch (error) {

        return res.status(500).json({ message: error.message })

    }



}

const getOwnCommunity = async (req, res) => {

    try {

        const user = await User.findOne({ where: { id: res.locals.user.id } })

        if (user) {


            const community = await user.getCommunities()  // Error... Trae todas las comunidades, tiene que traer todas las comunidades asociadas al usuario
            return res.status(200).json(community)



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




module.exports = { createOwnCommunity, createOneCommunity, getAllCommunities, getOwnCommunity } // metodos 