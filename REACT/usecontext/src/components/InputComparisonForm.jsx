import React, { useState, useRef, useEffect } from 'react';

const InputComparisonForm = () => {
    const [phone, setPhone] = useState('');
    const prevPhoneRef = useRef('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (prevPhoneRef.current === '') {
            
        } else if (prevPhoneRef.current !== phone) {
            setMessage("Value changed");
        } else {
            
            setMessage("Same as previous");
        }

       

        prevPhoneRef.current = phone;
    }, [phone]);

   

    return (
        <div className="p-4 border rounded shadow-md max-w-md mx-auto mt-4">
            <h2 className="text-xl font-bold mb-4">Task 6: Input Comparison</h2>
            <div className="flex flex-col gap-2">
                <label className="font-semibold">Phone Number:</label>
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border p-2 rounded"
                    placeholder="Enter phone number"
                />
                <p className="text-sm font-medium mt-2">
                    
                    Status: <span className={message === "Value changed" ? "text-blue-500" : "text-gray-500"}>{message}</span>
                </p>
                <p className="text-xs text-gray-400">Previous Value: {prevPhoneRef.current}</p>
            </div>
        </div>
    );
};

export default InputComparisonForm;
