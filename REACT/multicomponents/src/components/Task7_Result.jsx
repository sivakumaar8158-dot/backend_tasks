import { useLocation, useNavigate } from 'react-router-dom';

export default function Task7_Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const receivedData = location.state?.userData;

  if (!receivedData) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-4">
          <h2 className="text-xl font-bold text-yellow-900 mb-3">⚠️ No Data Received</h2>
          <p className="text-yellow-800 mb-4">
            Please navigate from Task 7 to see the received data.
          </p>
          <button
            onClick={() => navigate('/dashboard/task7')}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Go to Task 7
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        useLocation() - Receive Data
      </h2>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-6">
        <p className="text-purple-900 font-semibold mb-2">📍 This page demonstrates:</p>
        <ul className="text-purple-800 space-y-1 text-sm">
          <li>✓ Receiving state data via useLocation()</li>
          <li>✓ Accessing passed parameters</li>
          <li>✓ Displaying received data safely</li>
        </ul>
      </div>

      <div className="bg-green-100 border-l-4 border-green-600 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold text-green-900 mb-4">✅ Data Successfully Received!</h3>
        
        <div className="bg-white rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-semibold text-gray-700">Name:</span>
            <span className="text-gray-900">{receivedData.name}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-semibold text-gray-700">Email:</span>
            <span className="text-gray-900">{receivedData.email}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-semibold text-gray-700">Age:</span>
            <span className="text-gray-900">{receivedData.age}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-semibold text-gray-700">City:</span>
            <span className="text-gray-900">{receivedData.city}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Received At:</span>
            <span className="text-gray-900">{receivedData.timestamp}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => navigate('/dashboard/task7')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200"
        >
          ← Send More Data
        </button>
        <button
          onClick={() => navigate('/dashboard/task1')}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200"
        >
          Go to Dashboard
        </button>
      </div>

      <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-300">
        <h3 className="font-bold text-gray-900 mb-3">📝 How it works:</h3>
        <div className="text-sm text-gray-700 space-y-2">
          <p><strong>1. Send Phase:</strong> Use <code className="bg-gray-200 px-1 rounded">navigate('/path', {'{'} state: ... {'}'} )</code></p>
          <p><strong>2. Receive Phase:</strong> Use <code className="bg-gray-200 px-1 rounded">useLocation().state</code></p>
          <p><strong>3. Access Data:</strong> <code className="bg-gray-200 px-1 rounded">location.state?.userData</code></p>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-300 rounded-lg p-4">
        <h3 className="font-bold text-blue-900 mb-2">💡 Key Points:</h3>
        <ul className="text-blue-800 space-y-1 text-sm">
          <li>• State is passed as an object in the second argument to navigate()</li>
          <li>• Data persists during navigation</li>
          <li>• Use optional chaining (?.) to safely access state</li>
          <li>• Perfect for passing form data between routes</li>
          <li>• Note: State is cleared on page refresh!</li>
        </ul>
      </div>
    </div>
  );
}
