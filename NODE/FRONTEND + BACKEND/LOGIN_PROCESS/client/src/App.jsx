import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import {Routes,Route, Navigate} from 'react-router-dom'



const App = () => {




  return (
   <>
   <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    
     <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
   
   
   </Routes>
   </>
  )
}

export default App



export const PrivateRoute = ({children})=>{

  const token = localStorage.getItem("jwtToken")

  return token ? children : <Navigate to={"/"} />

}