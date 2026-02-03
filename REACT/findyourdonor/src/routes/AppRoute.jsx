import { Route, Routes } from "react-router-dom"
import Register from '../components/Register' 
import Login from "../components/Login"
import Home from "../components/Home"
import ContentNav from "../components/ContentNav"

const AppRoute = () => {
  return (
    <>
    
    <Routes>

        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        
        <Route element={<ContentNav/>}>
             <Route path="/home" element={<Home/>}/>
        </Route>


    </Routes>
    
    
    </>
  )
}

export default AppRoute