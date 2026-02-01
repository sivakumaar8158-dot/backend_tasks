import React, { useState, useEffect, useRef } from 'react';

const Task10 = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    return (
        <div className="task-container">
            <h3>Task 10: Previous Count (useState + useRef)</h3>
            <p>Current Count: {count}</p>
            <p>Previous Count: {prevCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Task10;
