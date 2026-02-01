import React, { useRef } from 'react';

const Task1 = () => {
    const h1Ref = useRef(null);

    const handleClick = () => {
        if (h1Ref.current) {
            h1Ref.current.innerText = 'Text Changed!';
        }
    };

    return (
        <div className="task-container">
            <h3>Task 1: Change h1 Text</h3>
            <h1 ref={h1Ref}>Original Text</h1>
            <button onClick={handleClick}>Change Text</button>
        </div>
    );
};

export default Task1;
