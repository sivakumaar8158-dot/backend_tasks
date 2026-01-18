import { useState } from 'react';

export default function Task1_SingleInput() {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setSubmittedUsername(username);
    setUsername(''); // Clear input after submit
  };

  return (
    <div className="form-container">
      <h2>Single Input Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedUsername && (
        <div className="success-message">
          Entered username: <strong>{submittedUsername}</strong>
        </div>
      )}
    </div>
  );
}
