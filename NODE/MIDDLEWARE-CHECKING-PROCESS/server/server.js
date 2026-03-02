import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import middlewareRoute from './routes/middlewareRoute.js'
import connectDB from './config/db.js'


const app = express()

dotenv.config()
connectDB()
app.use(express.json())
app.use(cors())

app.use("/api/middlewareroute", middlewareRoute)

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`server connected Successfuly http://localhost:${PORT}`);

})

