import codingJourney from '../assets/coding_journey.png';
import growthMindset from '../assets/growth_mindset.png';

const Content = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-6 py-20">
      <div className="group relative max-w-6xl w-full flex flex-col md:flex-row items-stretch gap-8">

        {/* Left Column: Text Content */}
        <div className="relative flex-1 bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden z-10">
          {/* Glow effect */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 space-y-8 text-left">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              The Journey So Far
            </h2>

            <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              <p>
                I am <span className="font-semibold text-white">P. Sivakumar</span> from <span className="text-purple-300">Kanchipuram</span>, a place known for its rich culture and woven traditions. My journey began at <span className="text-pink-300">Sri Ramanuja Vidhalaya CBSE School</span>, where I built my foundation.
              </p>

              {/* Mobile Image Interruption */}
              <div className="md:hidden my-6 rounded-2xl overflow-hidden shadow-lg border border-purple-500/20">
                <img src={codingJourney} alt="Coding Journey" className="w-full h-auto object-cover opacity-80" />
              </div>

              <p>
                Pursuing my degree at <span className="text-indigo-300">Apollo Arts and Science College</span> gave me new experiences and exposure. It helped me understand my strengths and what I truly wanted to become.
              </p>

              <div className="pl-6 border-l-4 border-purple-500/50 italic">
                <p>
                  "Every new concept I learn, every challenge I face, and every milestone I cross brings me closer to my goal."
                </p>
              </div>

              <p>
                Today, I am upskilling myself at <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">SLA Institute in Chennai</span>, confidently stepping from a non-IT background into the world of IT. My journey is still unfolding—and I’m determined to build a successful career.
              </p>
            </div>

            <div className="pt-8 flex justify-center md:justify-start">
              <button className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Connect With Me
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Assets (Desktop) */}
        <div className="hidden md:flex flex-col gap-6 w-1/3">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img src={codingJourney} alt="Coding Journey Abstract" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-4 left-4 z-20">
              <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">Vision</span>
              <p className="text-white font-medium">Digital Transformation</p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:translate-y-2 transition-transform duration-500 delay-100 flex-1">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img src={growthMindset} alt="Growth Mindset Abstract" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-4 left-4 z-20">
              <span className="text-xs font-bold tracking-widest text-pink-400 uppercase">Growth</span>
              <p className="text-white font-medium">Continuous Learning</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Content;