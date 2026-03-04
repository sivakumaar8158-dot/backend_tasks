import express from 'express'
import { addRegister,addLogin,getData } from '../controllers/authController.js'
import { verifyUserData } from '../middleware/authMiddleware.js'


const route = express.Router()


route.post("/register",addRegister)

route.post("/login",addLogin)

route.get("/dashboard",verifyUserData,getData)

export default route



// http://localhost:5000/api/auth/register
// http://localhost:5000/api/auth/login

// http://localhost:5000/api/auth/dashboard