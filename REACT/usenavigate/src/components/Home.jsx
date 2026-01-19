import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const features = [
    {
      title: 'Product Details Navigation',
      description: 'Pass product data using useNavigate state and read it with useLocation',
      path: '/',
      buttonText: 'View Products',
    },
    {
      title: 'Profile with Query Params',
      description: 'Read user data from URL query parameters using useLocation',
      path: '/profile?name=Guest&age=Unknown',
      buttonText: 'View Profile',
    },
    {
      title: 'Theme Switcher',
      description: 'Change page style dynamically based on theme query parameter',
      path: '/theme?theme=light',
      buttonText: 'Switch Theme',
    },
    {
      title: 'Order Management',
      description: 'Pass order details via location state and manage status locally',
      path: '/orders',
      buttonText: 'View Orders',
    },
    {
      title: 'Product Edit Form',
      description: 'Receive product data via useLocation and modify using React state',
      path: '/products-to-edit',
      buttonText: 'Edit Products',
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">useNavigate & useLocation Hooks</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Master React Router's navigation and location hooks with practical examples
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all transform"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-6">{feature.description}</p>
              <button
                onClick={() => navigate(feature.path)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                {feature.buttonText} →
              </button>
            </div>
          ))}
        </div>

      
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Concepts Covered</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">useNavigate Hook</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Navigate with location state</li>
                <li>✓ Pass objects between pages</li>
                <li>✓ Programmatic navigation</li>
                <li>✓ State persists on navigation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">useLocation Hook</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Access location.state</li>
                <li>✓ Parse query parameters</li>
                <li>✓ Monitor route changes</li>
                <li>✓ Read current pathname</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">State Management</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Local component state</li>
                <li>✓ Props passing</li>
                <li>✓ URL query parameters</li>
                <li>✓ Location state persistence</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Best Practices</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Use state for sensitive data</li>
                <li>✓ Use query params for filters</li>
                <li>✓ Validate received data</li>
                <li>✓ Handle missing data gracefully</li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Code Examples</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <p className="text-sm font-semibold text-blue-400 mb-3">Navigate with State</p>
              <pre className="text-xs leading-relaxed">
{`const navigate = useNavigate();

navigate('/page', {
  state: { data }
});`}
              </pre>
            </div>

            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <p className="text-sm font-semibold text-blue-400 mb-3">Read from Location</p>
              <pre className="text-xs leading-relaxed">
{`const location = useLocation();
const data = location.state?.data;

// Parse query params
const params = new URLSearchParams(
  location.search
);`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
