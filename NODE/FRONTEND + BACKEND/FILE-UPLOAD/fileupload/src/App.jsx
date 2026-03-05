import { useEffect, useState, useRef } from "react"
import axios from 'axios'


const App = () => {


  const [name, setName] = useState("")
  const [fileName, setFileName] = useState(null)
  const [userData, setUserData] = useState([])
  const fileInputRef = useRef(null)




  const handleClick = async (e) => {

    e.preventDefault()

    try {
      const formdDatas = new FormData()

      formdDatas.append("name", name)
      formdDatas.append("image", fileName)

      const adding = await axios.post("http://localhost:5000/api/crud/uploaddata", formdDatas, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      alert(adding.data.msg)
      fetchdatas()
      setName("")
      setFileName(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }

    } catch (error) {

      console.log(error);


    }

  }

  const fetchdatas = async () => {

    const get = await axios.get("http://localhost:5000/api/crud/getdataforimage")

    console.log(get);

    setUserData(get.data.datasend)

  }
  useEffect(() => {

    fetchdatas()

  }, [])


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 md:p-12 font-sans text-slate-800">
      <div className="max-w-md mx-auto bg-white/60 backdrop-blur-2xl p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/80 mb-6 relative overflow-hidden">

        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col gap-5">
          <div className="text-center mb-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Upload Media</h2>
            <p className="text-slate-500 mt-1 text-sm">Add a new image to your collection</p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1 ml-1">Title</label>
              <input
                className="w-full bg-white/80 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 transition-all shadow-sm"
                type="text"
                value={name}
                placeholder="Enter an image name..."
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1 ml-1">File</label>
              <input
                className="w-full text-slate-500 file:cursor-pointer file:mr-3 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100 file:transition-colors cursor-pointer bg-white/80 border border-slate-200 rounded-xl shadow-sm pr-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                type="file"
                ref={fileInputRef}
                onChange={(e) => setFileName(e.target.files[0])}
              />
            </div>
          </div>

          <button
            className="mt-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold flex items-center justify-center py-3 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
            onClick={handleClick}
          >
            Upload Now
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {userData.map((e) => (
            <div key={e._id} className="w-full bg-white rounded-4xl p-3 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 group hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] flex flex-col">

              <div className="overflow-hidden rounded-2xl mb-4 bg-slate-50 grow pt-[100%] relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={`http://localhost:5000/${e.image}`}
                  alt={e.name}
                />
              </div>
              <h1 className="text-lg font-bold text-slate-800 px-3 pb-2 truncate w-full text-center">{e.name}</h1>
            </div>
          ))}
        </div>

        {userData.length === 0 && (
          <div className="text-center py-24 text-slate-400 flex flex-col items-center bg-white/40 rounded-3xl border border-dashed border-slate-300">
            <svg className="w-16 h-16 mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <p className="text-lg font-medium text-slate-500">No vibrant memories here yet.<br />Upload your first photo above!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App