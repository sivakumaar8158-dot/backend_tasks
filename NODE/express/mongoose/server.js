import express from 'express'
import dotenv from 'dotenv'
import connectmongoose from './config/database.js'
connectmongoose()

const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`server connected Successfuly http://localhost:${PORT}`);
    
})

