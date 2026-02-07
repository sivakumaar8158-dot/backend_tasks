import React, { useReducer, useState } from 'react';

const initialState = { todos: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [...state.todos, { id: Date.now(), text: action.payload }]
            };
        case 'DELETE_TODO':
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case 'CLEAR_ALL':
            return {
                todos: []
            };
        default:
            return state;
    }
};

const Task3 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        if (inputValue.trim()) {
            dispatch({ type: 'ADD_TODO', payload: inputValue });
            setInputValue("");
        }
    };

    return (
        <div className="task-card">
            <div className="card-header">
                <h2 className="card-title">
                    <span className="card-emoji">✅</span>
                    Todo List
                </h2>
            </div>

            <div className="todo-input-row">
                <input
                    className="input-field"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="New Todo..."
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleAdd();
                    }}
                />
                <button className="btn btn-primary" onClick={handleAdd}>Add</button>
            </div>

            <div className="todo-list">
                {state.todos.length > 0 ? (
                    state.todos.map(todo => (
                        <div key={todo.id} className="todo-item">
                            <span className="todo-text">{todo.text}</span>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', color: '#64748b' }}>No todos yet.</p>
                )}
            </div>

            <div className="btn-group" style={{ marginTop: '1rem' }}>
                {state.todos.length > 0 && (
                    <button
                        className="btn btn-danger"
                        onClick={() => dispatch({ type: 'CLEAR_ALL' })}
                        style={{ width: '100%' }}
                    >
                        Clear All Todos
                    </button>
                )}
            </div>
        </div>
    );
};

export default Task3;
