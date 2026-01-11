import { useState } from 'react';
import PropTypes from 'prop-types';

const UserForm=({ initialData, onSubmit, submitLabel }) => {
    const [formData, setFormData] = useState(initialData);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (error) setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name.trim()) {
            setError('Name is required');
            return;
        }
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '15px' }}>
            <h4>User Form</h4>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ padding: '8px', width: '100%' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ padding: '8px', width: '100%' }}
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" style={{ padding: '8px 16px' }}>{submitLabel}</button>
        </form>
    );
}

UserForm.propTypes = {
    initialData: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
    submitLabel: PropTypes.string,
};

UserForm.defaultProps = {
    initialData: { name: '', email: '' },
    submitLabel: 'Save',
};

function FormApp() {
    const handleFormSubmit = (data) => {
        alert(`Form Submitted!\nName: ${data.name}\nEmail: ${data.email}`);
    };

    return (
        <div>
            <h3>Task 5: Form Validation</h3>
            <UserForm
                onSubmit={handleFormSubmit}
                initialData={{ name: 'John Doe', email: 'john@example.com' }}
            />
            <hr />
            <p>Test with custom submit label:</p>
            <UserForm
                onSubmit={handleFormSubmit}
                submitLabel="Register"
            />
        </div>
    );
}

export default FormApp;
