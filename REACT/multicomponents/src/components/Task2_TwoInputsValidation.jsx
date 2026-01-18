import { useState } from 'react';

export default function Task2_TwoInputsValidation() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Email validation - must contain @
    if (!email.includes('@')) {
      newErrors.email = 'Email must contain @';
    }

    // Password validation - length >= 6
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccess(true);
      setEmail('');
      setPassword('');
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="form-container">
      <h2>Two Inputs with Validation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {success && (
        <div className="success-message">
          ✓ Form submitted successfully!
        </div>
      )}
    </div>
  );
}
