import express from 'express'
import dotenv from 'dotenv'
import connectmongoose from './config/database.js'
dotenv.config()
connectmongoose()

const app = express()



const PORT = process.env.PORT || 5000
console.log("MONGO_URI:", process.env.MONGO_URI);



app.listen(PORT,()=>{
    console.log(`server connected Successfuly http://localhost:${PORT}`);
    
})

