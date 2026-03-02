import middleWareModel from '../models/middlewareModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const createData = async (req, res) => {

  console.log('controller req', req.body);

  try {

    const { name, email, password } = req.body

    const checkEmail = await middleWareModel.findOne({ email })

    if (checkEmail) {
      console.log('Email already exists check:', checkEmail.email)
      return res.status(400).json({ msg: `Already The EMail is there try new. Found matching email: ${checkEmail.email}` })
    }

    const slatKey = 10
    const hashpassword = await bcrypt.hash(password, slatKey)

    const addData = await middleWareModel.create({
      name, email, password: hashpassword
    })

    const gererateJWt = await jwt.sign({ id: addData._id, email: addData.email }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" })
    console.log("Registered User Token:", gererateJWt);

    res.status(200).json({ msg: "Data Save Successfully Done", token: gererateJWt })


  } catch (error) {
    console.log('error', error);
    return res.status(500).json({ msg: "Internal server error during registration", error: error.message });
  }
  // middleWareModel


}


export const logindata = async (req, res) => {

  try {

    const { email, password } = req.body

    const chechEmail = await middleWareModel.findOne({ email })



    const gererateJWt = await jwt.sign({ id: chechEmail._id, email: chechEmail.email }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" })

    console.log(gererateJWt);


    res.status(200).json({ msg: "Success", token: gererateJWt })


  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ msg: "Internal server error during login", error: error.message });
  }


}