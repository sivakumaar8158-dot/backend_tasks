import React, { useState, useRef } from 'react';

const AutoFocusForm = () => {
    const [email, setEmail] = useState('');
    const emailInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted Email: ${email}`);
        setEmail('');
        emailInputRef.current.focus();
    };

    return (
        <div className="p-4 border rounded shadow-md max-w-md mx-auto mt-4">
            <h2 className="text-xl font-bold mb-4">Task 2: Auto Focus & Clear</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <label className="font-semibold">Email:</label>
                <input
                    ref={emailInputRef}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded"
                    placeholder="Enter email"
                />
                <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AutoFocusForm;
