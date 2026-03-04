import authModel from "../models/authModel.js"
import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'
export const addRegister = async (req, res) => {

    try {

        const { name, email, password } = req.body

        const checkEmail = await authModel.findOne({ email })

        if (checkEmail) {

            return res.status(400).json({ msg: "Email Already Use" })

        }

        const soltKey = 10
        const hashPassword = await bcrypt.hash(password, soltKey)

        const addDatas = await authModel.create({
            name, email, password: hashPassword
        })

        res.status(201).json({ msg: "Successfully Added" })

    } catch (error) {

        console.log('error', error);
        res.status(500).json({ msg: "Server Error", error: error.message });

    }


}



export const addLogin = async (req, res) => {

    try {

        const { email, password } = req.body

        const checkEmail = await authModel.findOne({ email })

        if (!checkEmail) {

            return res.status(400).json({ msg: "Email Is Not Valid" })

        }

        const chechPassword = await bcrypt.compare(password, checkEmail.password)

        if (!chechPassword) {
            return res.status(404).json({ msg: "Passwoprd Invalid" })
        }

        const tokengenerate = jwt.sign({ id: checkEmail._id, name: checkEmail.name }, process.env.JWT_SECRET_KEY, { expiresIn: "1hr" })

        res.status(200).json({ msg: "success", token: tokengenerate })


    } catch (error) {

        console.log('error', error);
        res.status(500).json({ msg: "Server Error", error: error.message });

    }

}


export const getData = async (req, res) => {


    const user = await authModel.findById(req.jwtuser.id)

    if (!user) {
        return res.status(404).json({ msg: "User not found" })
    }

    res.status(200).json({ name: user.name, email: user.email })

}