import logo from '../assets/MainLogo.png'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <div className='bg-black text-white p-2 flex flex-row justify-between'>
      <div>
        <img className="h-20 w-20 ml-4" src={logo} alt="mainlogo"  />
      </div>
      <div className='flex  justify-between items-center text-center gap-12 mr-12'>
       <Link className='hover:bg-yellow-400 rounded hover:text-black' to="/home">Home</Link>
       <Link className='hover:bg-yellow-400 rounded hover:text-black' to="/">Register</Link>
       <Link className='hover:bg-yellow-400 rounded hover:text-black' to="/login">Login</Link>
       
      </div>
    </div>
    
    </>
  )
}

export default NavBar