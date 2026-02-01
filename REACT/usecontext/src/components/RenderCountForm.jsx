import React, { useState, useRef, useEffect } from 'react';

const RenderCountForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const renderCountRef = useRef(0);
    const [displayCount, setDisplayCount] = useState(0);

    useEffect(() => {
        renderCountRef.current = renderCountRef.current + 1;
        
    });

   

    const countSpanRef = useRef(null);

    useEffect(() => {
        renderCountRef.current += 1;
        if (countSpanRef.current) {
            countSpanRef.current.textContent = renderCountRef.current;
        }
    });


    return (
        <div className="p-4 border rounded shadow-md max-w-md mx-auto mt-4">
            <h2 className="text-xl font-bold mb-4">Task 3: Render Count</h2>
            <div className="flex flex-col gap-2">
                <label className="font-semibold">Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded"
                />
                <label className="font-semibold">Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded"
                />

                <div className="mt-4 p-2 bg-yellow-100 rounded">
                    <p><strong>Component Render Count:</strong> <span ref={countSpanRef}>{renderCountRef.current}</span></p>
                </div>
            </div>
        </div>
    );
};

export default RenderCountForm;
