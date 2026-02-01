import React, { useRef } from 'react';

const Task2 = () => {
    const divRef = useRef(null);

    const handleClick = () => {
        if (divRef.current) {
            // Generate a random color or toggle
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            divRef.current.style.backgroundColor = randomColor;
        }
    };

    return (
        <div className="task-container">
            <h3>Task 2: Change Background Color</h3>
            <div
                ref={divRef}
                style={{ width: '100px', height: '100px', border: '1px solid black', marginBottom: '10px' }}
            ></div>
            <button onClick={handleClick}>Change Color</button>
        </div>
    );
};

export default Task2;
