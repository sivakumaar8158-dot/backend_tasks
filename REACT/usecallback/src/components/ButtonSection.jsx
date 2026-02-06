import React, { useState, useCallback, memo } from 'react';


const ButtonChild = memo(({ onClick, children }) => {
    console.log(`ButtonChild "${children}" Rendered`);
    return (
        <button className="glass-btn" onClick={onClick}>
            {children}
        </button>
    );
});

ButtonChild.displayName = 'ButtonChild';

const ButtonSection = () => {
    const [count, setCount] = useState(0);

    
    const handleBtn1 = useCallback(() => {
        console.log('Button 1 Clicked');
    }, []);

    const handleBtn2 = useCallback(() => {
        console.log('Button 2 Clicked');
    }, []);

    const handleBtn3 = useCallback(() => {
        console.log('Button 3 Clicked');
        setCount(c => c + 1); 
    }, []);

    return (
        <div className="card highlight-card">
            <div className="card-header">
                <h3>Action Buttons</h3>
                <span className="badge">Parent Updates: {count}</span>
            </div>
            <div className="btn-group-row">
                <ButtonChild onClick={handleBtn1}>Action 1</ButtonChild>
                <ButtonChild onClick={handleBtn2}>Action 2</ButtonChild>
                <ButtonChild onClick={handleBtn3}>Update Parent</ButtonChild>
            </div>
            <p className="hint">Updating Parent via Button 3 doesn't re-render Buttons 1 & 2.</p>
        </div>
    );
};

export default ButtonSection;
