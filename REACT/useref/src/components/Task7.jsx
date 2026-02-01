import React, { useRef } from 'react';

const Task7 = () => {
    const sectionRef = useRef(null);

    const handleScroll = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="task-container">
            <h3>Task 7: Scroll to Section</h3>
            <button onClick={handleScroll}>Scroll to Bottom Section</button>
            <div style={{ height: '200px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
                <p>Scroll down content...</p>
                <div style={{ height: '400px' }}>Spacer...</div>
                <div ref={sectionRef} style={{ padding: '20px', backgroundColor: '#e0e0e0' }}>
                    Target Section
                </div>
            </div>
        </div>
    );
};

export default Task7;
