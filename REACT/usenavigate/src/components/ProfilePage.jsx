import { useLocation, useNavigate } from 'react-router-dom'

const ProfilePage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  
  const queryParams = new URLSearchParams(location.search)
  const userName = queryParams.get('name') || 'Guest'
  const userAge = queryParams.get('age') || 'Not provided'

  const sampleProfiles = [
    { name: 'John Doe', age: '25' },
    { name: 'Jane Smith', age: '30' },
    { name: 'Mike Johnson', age: '28' },
  ]

  const handleProfileClick = (profile) => {
    
    navigate(`/profile?name=${profile.name}&age=${profile.age}`)
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate('/')}
        className="mb-6 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
      >
        ← Back to Home
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>

            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <p className="text-2xl font-bold text-blue-600">{userName}</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
                <p className="text-2xl font-bold text-blue-600">{userAge}</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4 italic">
              Data is read from URL query parameters using useLocation hook
            </p>
          </div>
        </div>

        
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sample Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sampleProfiles.map((profile, index) => (
              <button
                key={index}
                onClick={() => handleProfileClick(profile)}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-left hover:bg-gray-50"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{profile.name}</h3>
                <p className="text-gray-600 mb-4">Age: {profile.age} years</p>
                <span className="text-blue-600 font-semibold">Click to view →</span>
              </button>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">How it works:</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>✓ Click on a profile card above to view that profile</li>
              <li>✓ Profile data is passed through URL query parameters</li>
              <li>✓ useLocation hook parses the search string (?name=...&age=...)</li>
              <li>✓ Profile updates dynamically as URL parameters change</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
