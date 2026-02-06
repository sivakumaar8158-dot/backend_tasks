import React, { useState, useCallback, memo } from 'react';


const CountChild = memo(({ onIncrement }) => {
    console.log('CounterChild Rendered');
    return (
        <button className="action-btn" onClick={onIncrement}>
            Increment Count
        </button>
    );
});

CountChild.displayName = 'CountChild';

const Counter = () => {
    const [theme, setTheme] = useState('light');
    const [count, setCount] = useState(0);

    
    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []); 

    
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={`card ${theme} theme-transition`}>
            <div className="card-header">
                <h3>Theme & Counter</h3>
                <span className="badge">{theme.toUpperCase()}</span>
            </div>

            <div className="card-body">
                <p className="stat-display">Current Count: <strong>{count}</strong></p>

                <div className="button-row">
                    <button className="theme-btn" onClick={toggleTheme}>
                        Toggle Theme
                    </button>
                    
                    <CountChild onIncrement={increment} />
                </div>
            </div>
            <p className="hint">Open console to verify Child doesn't re-render on Theme toggle.</p>
        </div>
    );
};

export default Counter;
