import mongoose from "mongoose";


const connectmongoose = async () => {



    try {

        const conn = await mongoose.connect(process.env.MONGO_URI)

        // const conn = await mongoose.connect(process.env.MONGO_LOCAL_URI)

        console.log(`DataBase Connected Successfully`);


    } catch (error) {

        console.log('Something Error', error);


    }

}

export default connectmongoose;