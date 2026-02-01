import React, { useRef } from 'react';

const Task5 = () => {
    const countRef = useRef(0);
    const displayRef = useRef(null);

    const handleIncrement = () => {
        countRef.current += 1;
        if (displayRef.current) {
            displayRef.current.innerText = `Count: ${countRef.current}`;
        }
    };

    return (
        <div className="task-container">
            <h3>Task 5: Counter (useRef)</h3>
            <h4 ref={displayRef}>Count: 0</h4>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Task5;
