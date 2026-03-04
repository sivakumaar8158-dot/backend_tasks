import { Link, useNavigate, useLocation } from 'react-router-dom'
const Navbar = () => {


  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    localStorage.removeItem("jwtToken")
    navigate("/")
  }

  const isActive = (path) => location.pathname === path

  const navLinkStyle = (path) =>
    `text-sm font-medium transition-colors hover:text-white ${isActive(path) ? 'text-white' : 'text-slate-400'}`

  const isLoggedIn = !!localStorage.getItem("jwtToken")

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent cursor-pointer">
             LOGO
            </span>
          </div>

          <div className="flex items-center space-x-6">
            {!isLoggedIn ? (
              <>
                <Link to="/" className={navLinkStyle('/')}>Login</Link>
                <Link to="/register" className={navLinkStyle('/register')}>Register</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className={navLinkStyle('/dashboard')}>Profile</Link>
                <button
                  onClick={handleClick}
                  className="ml-4 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-slate-700 shadow-sm"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar