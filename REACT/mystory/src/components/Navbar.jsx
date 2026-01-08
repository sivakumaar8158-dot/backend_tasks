import Content from "./Content"

const Navbar = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-sans selection:bg-purple-500 selection:text-white">
      {/* Background with gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 drop-shadow-[0_0_35px_rgba(168,85,247,0.5)] animate-fade-in-up">
            MY STORY
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-400 font-light tracking-widest uppercase opacity-80 animate-fade-in-up delay-200">
            From Kanchipuram to the World of IT
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-20">
        <Content />
      </div>
    </div>
  )
}

export default Navbar