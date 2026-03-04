import mongoose from "mongoose";


const authSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
},{timestamps:true})


const authModel = mongoose.model("authData", authSchema)

export default authModel