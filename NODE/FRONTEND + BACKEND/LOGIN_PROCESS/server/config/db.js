import mongoose from "mongoose";



const connectDB = async () => {

    try {

        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongodb connected successfully ${conn.connection.host}`);

    } catch (error) {

        console.log('something error', error);


    }

}

export default connectDB