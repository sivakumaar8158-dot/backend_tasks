import { useState } from 'react';
import './App.css';
import axios from 'axios'

const App = () => {


  const [formData,setFormData] = useState({name:"",email:"",password:""})

  const handlechange = (e)=>{

    const data = e.target.value

    const namedata = e.target.name

    setFormData({...formData,[namedata]:data})

  }

  const handleSubmit = async (e)=>{


    e.preventDefault()

    const res = await axios.post("http://localhost:3000/api/hashed/passwordhash",formData)

    console.log(res);

    alert(res.data.msg)
    
    setFormData({name:"",email:"",password:""})
  }






  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">

        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Register</h1>

        </div>

        <form onSubmit={handleSubmit}  className="mt-8 space-y-6">
          <div className="space-y-4">

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input onChange={handlechange} type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Enter your full name"/>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
              <input onChange={handlechange} type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Enter your email"/>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Password</label>
              <input onChange={handlechange} type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Enter your password"/>
            </div>

          </div>

          <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Register</button>
        </form>

      </div>
    </div>
  );
};

export default App;