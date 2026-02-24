import express from "express";
import { createData, getByID, getData } from "../controllers/movieController.js";

const movieRoute = express.Router()


movieRoute.post('/create',createData)
movieRoute.get('/get',getData)
movieRoute.get('/getid/:userid',getByID)

export default movieRoute

//Insert Api - http://localhost:5000/api/movieData/create
//get Api -    http://localhost:5000/api/movieData/get
// getby ID -  http://localhost:5000/api/movieData/getid/699c8029dc7e3cf25fdfb10c