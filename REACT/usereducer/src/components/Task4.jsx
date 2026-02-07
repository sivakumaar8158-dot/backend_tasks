import React, { useReducer } from 'react';

const initialState = { dark: false, fontSize: 16 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return { ...state, dark: !state.dark };
        case 'INC_FONT':
            return { ...state, fontSize: state.fontSize + 2 };
        case 'DEC_FONT':
            return { ...state, fontSize: Math.max(12, state.fontSize - 2) };
        default:
            return state;
    }
};

const Task4 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="task-card">
            <div className="card-header">
                <h2 className="card-title">
                    <span className="card-emoji">🎨</span>
                    Theme & Font
                </h2>
            </div>

            <div
                className={`theme-preview ${state.dark ? 'theme-dark' : 'theme-light'}`}
                style={{ fontSize: `${state.fontSize}px` }}
            >
                <p>This is a dynamic text preview.</p>
                <p>Current Font Size: {state.fontSize}px</p>
                <p>Current Theme: {state.dark ? 'Dark 🌙' : 'Light ☀️'}</p>
            </div>

            <div className="btn-group">
                <button
                    className="btn"
                    onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
                >
                    Toggle Theme
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => dispatch({ type: 'INC_FONT' })}
                >
                    Increase Font
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: 'DEC_FONT' })}
                >
                    Decrease Font
                </button>
            </div>
        </div>
    );
};

export default Task4;
