import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/authRoute.js'
import connectDB from './config/db.js'


const app = express()

dotenv.config()
connectDB()
app.use(express.json())
app.use(cors())

app.use("/api/auth",authRoutes)

const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`server connected Successfuly http://localhost:${PORT}`);
    
})


//http://localhost:5000/api/auth
