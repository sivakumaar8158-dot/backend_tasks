import mongoose from "mongoose";


const connectmongoose = async ()=>{



    try{

        // const conn = await mongoose.connect(process.env.MONGO_URL)

        const conn = await mongoose.connect(process.env.MONGO_LOCAL_URL)

        console.log(`DataBase Connected Successfully ${conn.connection.host}`);
        

    }catch (error){

        console.log('Something Error',error);
        

    }

}

export default connectmongoose;