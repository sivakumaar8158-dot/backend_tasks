import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import movieRoute from './routes/movieRoute.js'


dotenv.config()
connectDB()


const movieApp = express()


movieApp.use(cors())
movieApp.use(express.json())

movieApp.use("/api/movieData",movieRoute)

const PORT = process.env.PORT  || 5000

movieApp.listen(PORT,()=>{
    console.log(`Server Connected Successfully http://localhost:${PORT}`);
    
})


//http://localhost:5000/api/movieData