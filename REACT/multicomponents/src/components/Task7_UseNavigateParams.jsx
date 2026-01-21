import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Task7_UseNavigateParams() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    city: '',
  });

  // Get received state data from location
  const receivedData = location.state?.userData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendData = () => {
    if (!formData.name || !formData.email || !formData.age || !formData.city) {
      alert('Please fill all fields');
      return;
    }

    // Send state data using navigate with state
    navigate('/dashboard/task7-result', {
      state: {
        userData: {
          name: formData.name,
          email: formData.email,
          age: formData.age,
          city: formData.city,
          timestamp: new Date().toLocaleString()
        }
      }
    });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      age: '',
      city: '',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        useNavigate() with State - Send Data
      </h2>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
        <p className="text-blue-900 font-semibold mb-2">📋 What you'll learn:</p>
        <ul className="text-blue-800 space-y-1 text-sm">
          <li>✓ Use navigate() to pass state data through routes</li>
          <li>✓ Send complex objects between components</li>
          <li>✓ Access received data via useLocation()</li>
        </ul>
      </div>

      {receivedData && (
        <div className="bg-green-100 border border-green-400 rounded-lg p-4 mb-6">
          <h3 className="font-bold text-green-900 mb-3">📦 Received Data from Previous Navigation:</h3>
          <div className="bg-white p-3 rounded text-sm space-y-1">
            <p><strong>Name:</strong> {receivedData.name}</p>
            <p><strong>Email:</strong> {receivedData.email}</p>
            <p><strong>Age:</strong> {receivedData.age}</p>
            <p><strong>City:</strong> {receivedData.city}</p>
            <p><strong>Timestamp:</strong> {receivedData.timestamp}</p>
          </div>
        </div>
      )}

      <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleSendData(); }}>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="Enter your city"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200"
          >
            Send Data to Next Page
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200"
          >
            Reset
          </button>
        </div>
      </form>

      <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-300">
        <h3 className="font-bold text-gray-900 mb-3">💡 Code Example:</h3>
        <pre className="bg-gray-800 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`// Send data with navigate()
navigate('/path', {
  state: {
    userData: {
      name: 'John',
      email: 'john@example.com'
    }
  }
});

// Receive data with useLocation()
const location = useLocation();
const data = location.state?.userData;`}
        </pre>
      </div>
    </div>
  );
}
