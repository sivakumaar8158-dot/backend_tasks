import React, { useState, useCallback, memo } from 'react';


const InputChild = memo(({ name, value, onChange, label, type = "text" }) => {
    console.log(`InputChild [${name}] Rendered`);
    return (
        <div className="input-group">
            <label>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="form-input"
                placeholder={`Enter ${label}...`}
            />
        </div>
    );
});

InputChild.displayName = 'InputChild';

const OptimizedForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }, []);

    return (
        <div className="card">
            <div className="card-header">
                <h3>Optimized Form</h3>
            </div>
            <form className="form-layout" onSubmit={(e) => e.preventDefault()}>
                <InputChild
                    name="username"
                    label="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <InputChild
                    name="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <InputChild
                    name="password"
                    label="Password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </form>
            <div className="data-preview">
                <code>{JSON.stringify(formData, null, 2)}</code>
            </div>
            <p className="hint">Typing in one field doesn't re-render others (verify in console).</p>
        </div>
    );
};

export default OptimizedForm;
