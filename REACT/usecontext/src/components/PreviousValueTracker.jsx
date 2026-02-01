import React, { useState, useRef, useEffect } from 'react';

const PreviousValueTracker = () => {
    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');
    const prevNameRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedName(name);
        setName('');
    };

    useEffect(() => {
        if (submittedName) {
            prevNameRef.current = submittedName;
        }
    }, [submittedName]);

    return (
        <div className="p-4 border rounded shadow-md max-w-md mx-auto mt-4">
            <h2 className="text-xl font-bold mb-4">Task 1: Previous Value Tracker</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <label className="font-semibold">Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 rounded"
                    placeholder="Enter name"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Submit
                </button>
            </form>
            <div className="mt-4 p-2 bg-gray-100 rounded">
                <p><strong>Current Submitted:</strong> {submittedName}</p>
                <p><strong>Previous Submitted:</strong> {prevNameRef.current}</p>
            </div>
        </div>
    );
};

export default PreviousValueTracker;
