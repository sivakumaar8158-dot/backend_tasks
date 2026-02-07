import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return { count: state.count + 5 };
        case 'DEC':
            return { count: state.count - 5 };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
};

const Task1 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="task-card">
            <div className="card-header">
                <h2 className="card-title">
                    <span className="card-emoji">🧪</span>
                    Counter with Step
                </h2>
            </div>

            <div className="counter-display">
                {state.count}
            </div>

            <div className="btn-group">
                <button
                    className="btn btn-primary"
                    onClick={() => dispatch({ type: 'INC' })}
                >
                    Increment (+5)
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: 'DEC' })}
                >
                    Decrement (-5)
                </button>
                <button
                    className="btn"
                    onClick={() => dispatch({ type: 'RESET' })}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Task1;
