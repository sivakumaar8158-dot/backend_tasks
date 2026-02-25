import express from 'express'
import { add } from '../controllers/hashedController.js'


const route = express.Router()


route.post("/passwordhash",add)

export default route;

//http://localhost:3000/api/hashed/passwordhash