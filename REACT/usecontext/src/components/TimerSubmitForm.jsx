import React, { useState, useRef, useEffect } from 'react';

const TimerSubmitForm = () => {
    const [feedback, setFeedback] = useState('');
    const timerRef = useRef(null);
    const formRef = useRef(null);

    const handleChange = (e) => {
        setFeedback(e.target.value);

        

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            alert(`Auto-submitting feedback: ${e.target.value}`); 
            
            setFeedback(''); 
        }, 10000);
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (timerRef.current) clearTimeout(timerRef.current);
        alert(`Manual Submit: ${feedback}`);
        setFeedback('');
    };

    return (
        <div className="p-4 border rounded shadow-md max-w-md mx-auto mt-4">
            <h2 className="text-xl font-bold mb-4">Task 5: Timer Auto-Submit</h2>
            <p className="text-sm text-gray-500 mb-2">Form will auto-submit 10s after you stop typing.</p>
            <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col gap-2">
                <label className="font-semibold">Feedback:</label>
                <textarea
                    value={feedback}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    placeholder="Type feedback..."
                />
                <button type="submit" className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600">
                    Submit Now
                </button>
            </form>
        </div>
    );
};

export default TimerSubmitForm;
