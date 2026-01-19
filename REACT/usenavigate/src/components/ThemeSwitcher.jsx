import { useLocation, useNavigate } from 'react-router-dom'

const ThemeSwitcher = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // Parse theme from query parameters
  const queryParams = new URLSearchParams(location.search)
  const currentTheme = queryParams.get('theme') || 'light'

  const isLightTheme = currentTheme === 'light'

  const handleThemeChange = (theme) => {
    navigate(`/theme?theme=${theme}`)
  }

  // Define theme colors
  const themeStyles = {
    light: {
      bg: 'bg-white',
      bgPage: 'bg-gray-100',
      text: 'text-gray-900',
      card: 'bg-white',
      cardBorder: 'border-gray-300',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
      accent: 'text-blue-600',
    },
    dark: {
      bg: 'bg-gray-800',
      bgPage: 'bg-gray-900',
      text: 'text-white',
      card: 'bg-gray-700',
      cardBorder: 'border-gray-600',
      button: 'bg-yellow-500 hover:bg-yellow-600 text-gray-900',
      accent: 'text-yellow-400',
    },
  }

  const theme = themeStyles[currentTheme] || themeStyles.light

  return (
    <div className={`min-h-screen ${theme.bgPage} ${theme.text} transition-colors duration-300 p-8`}>
      <button
        onClick={() => navigate('/')}
        className={`mb-6 py-2 px-4 rounded-lg ${theme.button}`}
      >
        ← Back to Home
      </button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Theme Switcher</h1>

        {/* Theme Toggle */}
        <div className={`${theme.card} rounded-lg shadow-lg p-8 border-2 ${theme.cardBorder} mb-8`}>
          <h2 className="text-2xl font-semibold mb-6">Select Theme</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => handleThemeChange('light')}
              className={`p-6 rounded-lg font-semibold transition-all ${
                isLightTheme
                  ? 'ring-4 ring-blue-500 bg-blue-50 text-blue-900'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              ☀️ Light Theme
            </button>

            <button
              onClick={() => handleThemeChange('dark')}
              className={`p-6 rounded-lg font-semibold transition-all ${
                !isLightTheme
                  ? 'ring-4 ring-yellow-500 bg-yellow-50 text-gray-900'
                  : 'bg-gray-600 text-white'
              }`}
            >
              🌙 Dark Theme
            </button>
          </div>

          <p className="text-sm italic opacity-75">
            Current theme: <span className={`font-semibold ${theme.accent}`}>{currentTheme.toUpperCase()}</span>
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className={`${theme.card} rounded-lg shadow-md p-6 border-2 ${theme.cardBorder} transition-colors`}
          >
            <h3 className="text-xl font-semibold mb-3">📱 Responsive</h3>
            <p className="opacity-75">This theme switcher is fully responsive and works on all device sizes.</p>
          </div>

          <div
            className={`${theme.card} rounded-lg shadow-md p-6 border-2 ${theme.cardBorder} transition-colors`}
          >
            <h3 className="text-xl font-semibold mb-3">🎨 Dynamic Colors</h3>
            <p className="opacity-75">Page style changes dynamically based on the query parameter value.</p>
          </div>

          <div
            className={`${theme.card} rounded-lg shadow-md p-6 border-2 ${theme.cardBorder} transition-colors`}
          >
            <h3 className="text-xl font-semibold mb-3">🔗 URL Based</h3>
            <p className="opacity-75">Theme preference is stored in the URL query params using useLocation.</p>
          </div>
        </div>

        {/* Info Section */}
        <div className={`${theme.card} rounded-lg shadow-lg p-8 border-2 ${theme.cardBorder} mt-8`}>
          <h3 className="text-xl font-semibold mb-4">How it Works</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>✓ Theme value comes from URL query parameter (?theme=light or ?theme=dark)</li>
            <li>✓ useLocation hook reads the search string</li>
            <li>✓ Component re-renders when query parameters change</li>
            <li>✓ Page styling updates instantly based on selected theme</li>
            <li>✓ Theme preference is bookmarkable via URL</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ThemeSwitcher
