import mongoose from 'mongoose'

const hashSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String}
},{timestamps:true})


const hashModel = mongoose.model('hashpassword',hashSchema)

export default hashModel