import { useState, useEffect } from 'react';

export default function Task6_LocalStorage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('signupFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.error('Error parsing localStorage data:', error);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedData);
    // Save to localStorage on every change
    localStorage.setItem('signupFormData', JSON.stringify(updatedData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.password) {
      // Save to localStorage
      localStorage.setItem('signupFormData', JSON.stringify(formData));
      setSubmitted(true);

      // Clear form after 3 seconds and keep data in localStorage
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          password: '',
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleClearStorage = () => {
    localStorage.removeItem('signupFormData');
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="form-container">
      <h2>Form + LocalStorage</h2>

      {submitted && formData.name && (
        <div className="success-message">
          ✓ Signup successful! Data saved to localStorage.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Sign Up</button>
        <button 
          type="button" 
          onClick={handleClearStorage}
          style={{
            marginTop: '10px',
            background: '#dc3545',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Clear LocalStorage
        </button>
      </form>

      <div style={{ marginTop: '20px', padding: '10px', background: '#f0f0f0', borderRadius: '4px' }}>
        <p style={{ fontSize: '0.9em', color: '#666' }}>
          💾 <strong>LocalStorage Info:</strong><br />
          Data is automatically saved as you type and persisted on page reload.
          Try refreshing the page to see auto-filled data!
        </p>
      </div>
    </div>
  );
}
