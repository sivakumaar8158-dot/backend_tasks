import axios from "axios"
import { useState } from "react";

const App = () => {

  const [data,setData] = useState()
  const [msg,setMsg] = useState([])


 
  const handleclick = async()=>{

  

    try {

      const fetchdata = await axios.get("http://localhost:5000/api/movieData/get");

      console.log(fetchdata);
      
      
    } catch (error) {

      console.log('something error',error);
      
      
    }



  }

  return (
    <>
    
    <div className=" text-2xl text-center items-center">
      <h1 className="items-center p-5 text-center">Form Handling using API through Backend</h1>
      <button className="p-2 bg-amber-400 text-black items-center text-center mt-3" onClick={handleclick} >Click to Check API Status</button>
    </div>
    <div>
      <h1>{msg}</h1>
    </div>
    
    </>
  )
}

export default App