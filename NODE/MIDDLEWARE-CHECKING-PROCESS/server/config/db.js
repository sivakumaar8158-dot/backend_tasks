import mongoose from "mongoose";


const connectDb = async()=>{

    try {

        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database Connected Successfully ${conn.connection.host}`);
        
    } catch (error) {

        console.log('something error',error);
        
        
    }
    
}


export default connectDb;