import React, { useState, useRef } from 'react';

const ScrollToErrorForm = () => {
    const [formData, setFormData] = useState({
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: ''
    });

    
    const inputsRef = useRef({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emptyFields = Object.keys(formData).filter(key => formData[key].trim() === '');

        if (emptyFields.length > 0) {
            const firstEmptyField = emptyFields[0];
            const inputElement = inputsRef.current[firstEmptyField];

            if (inputElement) {
                inputElement.focus();
                inputElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                alert(`Please fill out ${firstEmptyField}`);
            }
        } else {
            alert('Form Submitted successfully!');
            
            setFormData({ field1: '', field2: '', field3: '', field4: '', field5: '' });
        }
    };

    return (
        <div className="p-4 border rounded shadow-md max-w-md mx-auto mt-4 mb-20">
            <h2 className="text-xl font-bold mb-4">Task 7: Scroll to Error</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {['field1', 'field2', 'field3', 'field4', 'field5'].map((field, index) => (
                    <div key={field} className="flex flex-col">
                        <label className="font-semibold capitalize">Input {index + 1}:</label>
                        <input
                            ref={el => inputsRef.current[field] = el}
                            name={field}
                            type="text"
                            value={formData[field]}
                            onChange={handleChange}
                            className="border p-2 rounded"
                            placeholder={`Enter ${field}...`}
                        />
                        {/* Adding some spacer to make form long enough to scroll */}
                        <div className="h-24"></div>
                    </div>
                ))}
                <button type="submit" className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                    Submit Long Form
                </button>
            </form>
        </div>
    );
};

export default ScrollToErrorForm;
