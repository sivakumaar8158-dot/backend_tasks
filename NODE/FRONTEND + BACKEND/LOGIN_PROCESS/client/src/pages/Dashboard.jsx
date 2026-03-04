import { useNavigate } from 'react-router-dom'
import Navbar from '../components/NavBar'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Dashboard = () => {

  const [userData, setUserData] = useState({ name: "", email: "" })
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("jwtToken")

    if (!token) {
      alert("Access Denied: Please log in to view your profile.")
      navigate("/")
      return
    }

    const fetchdata = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/dashboard", { headers: { Authorization: token } })
        setUserData({ name: res.data.name, email: res.data.email })

      } catch (error) {
        if (error.response && error.response.data) {
          alert(error.response.data.msg);
        } else {
          alert("Network error or server is down.");
        }
        localStorage.removeItem("jwtToken")
        navigate("/")
      }
    }

    fetchdata()
  }, [navigate])

  return (
    <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-slate-200 font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center items-start mt-10">

        {/* Centered Profile Card */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-10 sm:p-14 mb-10 shadow-2xl group w-full max-w-lg text-center">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all duration-700"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-700"></div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-5">
            <div className="flex-shrink-0 flex items-center justify-center h-28 w-28 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 shadow-[0_0_30px_rgba(79,70,229,0.4)] text-5xl font-bold text-white shadow-indigo-500/30 mb-4 border-4 border-slate-800">
              {userData.name ? userData.name.charAt(0).toUpperCase() : "U"}
            </div>

            <div>
              <p className="text-blue-400 font-medium tracking-wide text-sm uppercase mb-2">My Profile</p>
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200 mb-2">
                {userData.name || "Loading..."}
              </h1>
              <p className="text-slate-400 text-lg mt-3 flex items-center justify-center gap-2 bg-slate-800/50 py-2 px-4 rounded-full border border-slate-700/50">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {userData.email || "Loading..."}
              </p>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Dashboard