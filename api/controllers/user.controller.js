const User = require('../models/user.model')
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({ where: req.query })
        if (users) {
            return res.status(200).json(users)
        } else {
            return res.status(404).send("User not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getOwnProfile = async (req, res) => {
    try {
        const user = await User.findByPk(res.locals.user.id, {
            attributes: {
                exclude: ["password"]
            }
        })

        if (user) {
            return res.status(200).json(user)
        } else {
            console.log(res.locals.user)
            console.log(res.locals)
            return res.status(404).send(res.locals.user)
        }
    } catch (error) {
        console.log(res.locals.user)
        console.log(res.locals)
        res.status(500).json({ message: res.locals.user })
    }
}

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(404).send("User not created")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.update(req.body, {
            where: {
                id: req.params.userId
            }
        })
        if (user > 0) {
            return res.status(200).json({ message: "user updated" })
        } else {
            return res.status(404).send("User not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateOwnProfile = async (req, res) => {
    try {
        const { password, ...updatedFields } = req.body; // Exclude password from updatedFields --> por destructuring, separamos password del resto de campos
        //que hay en req.body, y utilizando ...spread operator metemos todos los demás en updatedFields'. 
        const [updatedRows] = await User.update(updatedFields, {
            where: {
                id: res.locals.user.id
            }
        });

        if (updatedRows > 0) {
            console.log(affectedRows)
            return res.status(200).json({ message: "User updated" });
        } else {
            console.log(affectedRows)
            return res.status(404).send("User not found");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateOwnPassword = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))  // Metemos SALTROUND ( nivel de seguridad )
        const encrypted = bcrypt.hashSync(req.body.password, salt)         // Encriptamos la nueva contraseña
        req.body.password = encrypted                                      // el password del body lo convertimos en nuestra contraseña encriptada. 
        const user = await User.update(req.body, {                         // actualizamos el body. No funciona meter req.body.password 
            where: {
                id: res.locals.user.id
            }
        })
        if (user) {
            return res.status(200).json({ message: "password updated" })
        } else {
            return res.status(404).send("User not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.destroy({
            where: {
                id: req.params.userId
            }
        })
        if (user) {
            return res.status(200).json({ message: "user deleted" })
        } else {
            return res.status(404).send("User not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteOwnProfile = async (req, res) => {
    try {
        const user = await User.destroy({
            where: {
                id: res.locals.user.id
            }
        })
        if (user) {
            return res.status(200).json({ message: "user deleted" })
        } else {
            return res.status(404).send("User not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getAllUsers,
    getOwnProfile,
    createUser,
    updateUser,
    updateOwnProfile,
    updateOwnPassword,
    deleteUser,
    deleteOwnProfile
}