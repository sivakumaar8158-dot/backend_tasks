import hashModel from "../models/hashModel.js";
import bcrypt from 'bcrypt'

export const add = async (req,res)=>{

try {

    const {name,email,password} = req.body

    const checkEmail = await hashModel.findOne({email})

    if(checkEmail){
        return res.status(400).json({msg:"Already the email is exist"})
    }

    const saltRound = 10;

    const hashPassword = await bcrypt.hash(password,saltRound)

    const addData = await hashModel.create({name,email,password:hashPassword})

    res.status(200).json({msg:"Data Added Successfully",addData})
    
} catch (error) {

    console.log('something error',error);
    
    res.status(500).json({msg:"Something Error",error})
    
}

}

export const getData = async(req,res)=>{


    const data = await hashModel.find()

    res.status(200).json({info:data})

}