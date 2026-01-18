import { useState } from 'react';

export default function Task4_LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Admin credentials check
    if (username === 'admin' && password === '123456') {
      setIsLoggedIn(true);
      setUsername('');
      setPassword('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="form-container">
      <h2>Login Form with Conditional UI</h2>

      {/* Conditional rendering: Show form only if not logged in */}
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <button type="submit">Login</button>

          {error && <div className="error">{error}</div>}

          <p className="hint" style={{ fontSize: '0.85em', color: '#666', marginTop: '10px' }}>
            Demo: username = <strong>admin</strong>, password = <strong>123456</strong>
          </p>
        </form>
      ) : (
        // Show welcome message after successful login
        <div className="success-message" style={{ textAlign: 'center' }}>
          <h3>Welcome Admin</h3>
          <p>You have successfully logged in!</p>
          <button onClick={handleLogout} style={{ marginTop: '10px' }}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
