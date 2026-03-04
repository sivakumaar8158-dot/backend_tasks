import middleWareModel from "../models/middlewareModel.js"
import bcrypt from 'bcrypt'
export const validateRegister = (req, res, next) => {

    try {



        const { name, email, password } = req.body

        if (!name || !email || !password) {

            return res.status(400).json({ msg: "Please Enter the Datas" })

        }


        if (password.length <= 8) {

            return res.status(404).json({ msg: "Please Enter Minimum 8 charactor" })

        }

        next()

    } catch (error) {

        console.log('error', error);

        return res.status(404).json({ msg: "Somerthing Error", error })

    }







}



export const loginMiddelware = async (req, res, next) => {


    try {



        const { email, password } = req.body

        if (!email || !password) {

            return res.status(400).json({ msg: "Please Enter the Datas" })

        }

        const chechEmail = await middleWareModel.findOne({ email })

        const passwordCheck = await bcrypt.compare(password, chechEmail.password)


        if (!passwordCheck) {

            return res.status(400).json({ msg: "Enter The valid Password" })

        }



        next()

    } catch (error) {

        console.log('error', error);

        return res.status(404).json({ msg: "Somerthing Error", error })

    }



}