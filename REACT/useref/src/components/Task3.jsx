import React, { useRef, useEffect } from 'react';

const Task3 = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className="task-container">
            <h3>Task 3: Auto-focus Input</h3>
            <input ref={inputRef} type="text" placeholder="I focus on load" />
        </div>
    );
};

export default Task3;
