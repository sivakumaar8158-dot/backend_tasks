import mongoose from 'mongoose'



const connectDB = async ()=>{


   try {


     const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Mongodb Connected Successfully ${conn.connection.host}`);
    
   } catch (error) {

    console.log('Something error',error);
    
    
   }
    

}
export default connectDB;