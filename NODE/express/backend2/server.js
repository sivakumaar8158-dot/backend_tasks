import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoute.js'
import cors from 'cors'

dotenv.config()


const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())

app.use(express.json())

app.use("/api/route",authRoutes)


app.listen(PORT,()=>{

    console.log(`server running Successfully http://localhost:${PORT}`);
    
})



// api Link for xxxx Methods - http://localhost:5000/api/route
