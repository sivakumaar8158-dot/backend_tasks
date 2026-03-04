import mongoose from "mongoose";


const middlewareSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
},{timestamps:true})



const middleWareModel = mongoose.model("middlewaredata",middlewareSchema)


export default middleWareModel