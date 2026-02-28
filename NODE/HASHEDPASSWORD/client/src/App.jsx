import React, { useEffect, useState } from 'react'
import axios from 'axios'



const App = () => {

  const [formData, setFormData] = useState({ name: "", email: "", password: "" })

  const [toggle, setToggle] = useState(0)

  const [showData, setShowData] = useState([])

  const [serchdata, setSerchData] = useState("")

  const handlechange = (e) => {

    const data = e.target.value

    const namedata = e.target.name

    setFormData({ ...formData, [namedata]: data })


  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const res = await axios.post("http://localhost:3000/api/hashed/passwordhash", formData)

      //console.log(res);

      alert(res.data.msg)



      setFormData({ name: "", email: "", password: "" })

    } catch (error) {

      //console.log(error.response.data.msg);
      alert(error.response.data.msg)

    }



  }



  useEffect(() => {

    const fetchData = async () => {

      try {

        const getdata = await axios.get("http://localhost:3000/api/hashed/getdatanew")

        //console.log(getdata);

        setShowData(getdata.data.info)


      } catch (error) {

        console.log('something error ', error);


      }

    }


    fetchData()

  }, [formData])


  const search = (e) => {

    setSerchData(e.target.value)

  }


  const filterdata = showData.filter((e) => e.name.toLowerCase().includes(serchdata.toLowerCase()))

  // console.log(filterdata);


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Register</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="enter the name"
            name="name"
            value={formData.name}
            onChange={handlechange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
          <input
            type="email"
            placeholder="enter the email"
            name="email"
            value={formData.email}
            onChange={handlechange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
          <input
            type="password"
            placeholder="enter the password"
            value={formData.password}
            name="password"
            onChange={handlechange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
          <input
            type="submit"
            value="Register"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg cursor-pointer transition shadow-md"
          />
        </form>
      </div>

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 mb-10">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter the search name"
            onChange={search}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterdata.map((e) => (
            <div key={e._id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition">
              <h1 className="text-xl font-bold text-gray-800 mb-2 truncate" title={e.name}>Name: {e.name}</h1>
              <h2 className="text-sm font-semibold text-gray-600 mb-2 truncate" title={e.email}>Email: {e.email}</h2>
              <p className="text-xs text-gray-500 truncate" title={e.password}>Password: {e.password}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => setToggle(1)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg transition shadow-md"
        >
          Click Nav
        </button>
        <span className="text-gray-600 font-medium">{toggle}</span>
      </div>
    </div>
  )
}

export default App