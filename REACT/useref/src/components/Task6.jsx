import React, { useRef } from 'react';

const Task6 = () => {
    const pRef = useRef(null);

    const handleShowText = () => {
        if (pRef.current) {
            alert(pRef.current.innerText);
        }
    };

    return (
        <div className="task-container">
            <h3>Task 6: Get Text from Paragraph</h3>
            <p ref={pRef}>This is the text inside the paragraph tag.</p>
            <button onClick={handleShowText}>Show Text in Alert</button>
        </div>
    );
};

export default Task6;
