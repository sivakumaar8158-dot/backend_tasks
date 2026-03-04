import e from 'express'
import { createData, logindata } from '../controllers/middlewarecontroller.js'
import { loginMiddelware, validateRegister } from '../middlewares/validateUser.js'



const route = e.Router()


route.post("/create",validateRegister,createData)
route.post("/login",loginMiddelware,logindata)


// http://localhost:5000/api/middlewareroute/create
// http://localhost:5000/api/middlewareroute/login

export default route