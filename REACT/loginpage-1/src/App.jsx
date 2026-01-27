import { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('register');
  const [user, setUser] = useState(null);

  const handleRegisterSuccess = () => {
    setCurrentPage('login');
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  return (
    <div className="app-container">
      {currentPage === 'register' && (
        <Register onSuccess={handleRegisterSuccess} />
      )}
      {currentPage === 'login' && (
        <Login onSuccess={handleLoginSuccess} />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
