import React, { useRef } from 'react';

const Task9 = () => {
    const inputRef = useRef(null);

    const handleSetValue = () => {
        if (inputRef.current) {
            inputRef.current.value = 'Predefined Value';
        }
    };

    return (
        <div className="task-container">
            <h3>Task 9: Set Input Value</h3>
            <input ref={inputRef} type="text" placeholder="Click button to set value" />
            <button onClick={handleSetValue}>Set "Predefined Value"</button>
        </div>
    );
};

export default Task9;
