import { useState } from 'react';

export default function Task5_MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    age: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!formData.email.includes('@')) {
        newErrors.email = 'Valid email is required';
      }
    } else if (step === 2) {
      if (!formData.mobile.trim()) {
        newErrors.mobile = 'Mobile number is required';
      }
      if (!formData.age || formData.age < 18) {
        newErrors.age = 'Age must be at least 18';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setSubmitted(true);
      // Reset after 4 seconds
      setTimeout(() => {
        setStep(1);
        setFormData({ name: '', email: '', mobile: '', age: '' });
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <div className="form-container">
      <h2>Multi-Step Form</h2>

      {submitted ? (
        <div className="success-message">
          <h3>Form Submitted Successfully!</h3>
          <div className="submitted-data">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Mobile:</strong> {formData.mobile}</p>
            <p><strong>Age:</strong> {formData.age}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="step-indicator">
            <span className={`step ${step === 1 ? 'active' : ''}`}>1</span>
            <span className="line"></span>
            <span className={`step ${step === 2 ? 'active' : ''}`}>2</span>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            {step === 1 && (
              <>
                <h3>Step 1: Personal Info</h3>
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
                  {errors.name && <span className="error">{errors.name}</span>}
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
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h3>Step 2: Additional Info</h3>
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
                  {errors.mobile && <span className="error">{errors.mobile}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="age">Age:</label>
                  <input
                    id="age"
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Enter your age"
                  />
                  {errors.age && <span className="error">{errors.age}</span>}
                </div>
              </>
            )}

            <div className="button-group">
              {step > 1 && (
                <button type="button" onClick={handlePrevious} className="secondary-btn">
                  Previous
                </button>
              )}
              {step < 2 ? (
                <button type="button" onClick={handleNext} className="primary-btn">
                  Next
                </button>
              ) : (
                <button type="submit" onClick={handleSubmit} className="primary-btn">
                  Submit
                </button>
              )}
            </div>
          </form>
        </>
      )}
    </div>
  );
}
