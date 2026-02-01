import React, { useRef } from 'react';

const Task8 = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    const scrollTo = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="task-container">
            <h3>Task 8: Scroll to Specific Section</h3>
            <div style={{ marginBottom: '10px' }}>
                <button onClick={() => scrollTo(section1Ref)}>Go to Section 1</button>
                <button onClick={() => scrollTo(section2Ref)}>Go to Section 2</button>
                <button onClick={() => scrollTo(section3Ref)}>Go to Section 3</button>
                <button onClick={() => scrollTo(section4Ref)}>Go to Section 4</button>
            </div>

            <div style={{ height: '200px', overflowY: 'auto', border: '1px solid #ccc' }}>
                <div ref={section1Ref} style={{ height: '150px', backgroundColor: '#ffcccc' }}>Section 1</div>
                <div ref={section2Ref} style={{ height: '150px', backgroundColor: '#ccffcc' }}>Section 2</div>
                <div ref={section3Ref} style={{ height: '150px', backgroundColor: '#ccccff' }}>Section 3</div>
                <div ref={section4Ref} style={{ height: '150px', backgroundColor: '#ffffcc' }}>Section 4</div>
            </div>
        </div>
    );
};

export default Task8;
