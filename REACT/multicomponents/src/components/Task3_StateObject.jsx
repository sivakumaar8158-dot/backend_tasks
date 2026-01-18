import { useState } from 'react';

export default function Task3_StateObject() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // One common handleChange for all inputs using name attribute
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Spread operator to keep other values
      [name]: value, // Dynamic key update
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>Single State Object Form</h2>
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
          <label htmlFor="mobile">Mobile:</label>
          <input
            id="mobile"
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && formData.name && formData.email && formData.mobile && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Mobile:</strong> {formData.mobile}</p>
        </div>
      )}
    </div>
  );
}
