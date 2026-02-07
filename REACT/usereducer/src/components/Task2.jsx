import React, { useReducer } from 'react';

const initialState = { name: "", email: "", password: "" };

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const Task2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="task-card">
            <div className="card-header">
                <h2 className="card-title">
                    <span className="card-emoji">📝</span>
                    Input Field Manager
                </h2>
            </div>

            <div className="input-group">
                <label>Name</label>
                <input
                    className="input-field"
                    type="text"
                    value={state.name}
                    onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
                    placeholder="Enter name"
                />
            </div>

            <div className="input-group">
                <label>Email</label>
                <input
                    className="input-field"
                    type="email"
                    value={state.email}
                    onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                    placeholder="Enter email"
                />
            </div>

            <div className="input-group">
                <label>Password</label>
                <input
                    className="input-field"
                    type="password"
                    value={state.password}
                    onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
                    placeholder="Enter password"
                />
            </div>

            <div className="btn-group">
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: 'RESET' })}
                >
                    Reset All
                </button>
            </div>

            <div style={{ marginTop: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
                <p><strong>Current State:</strong></p>
                <pre style={{ background: '#f1f5f9', padding: '0.5rem', borderRadius: '4px' }}>
                    {JSON.stringify(state, null, 2)}
                </pre>
            </div>
        </div>
    );
};

export default Task2;
