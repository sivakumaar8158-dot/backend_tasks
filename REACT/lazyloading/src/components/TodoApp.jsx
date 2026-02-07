import React, { useState, useReducer, useRef, useEffect } from 'react';

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, { id: Date.now(), text: action.payload }];
        case 'DELETE':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');
    const [totalAdded, setTotalAdded] = useState(0);
    const inputRef = useRef(null);

    
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

   
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500); 

        return () => clearTimeout(handler);
    }, [inputValue]);

    const handleAdd = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            dispatch({ type: 'ADD', payload: inputValue });
            setTotalAdded(prev => prev + 1);
            setInputValue('');
            inputRef.current?.focus();
        }
    };

    const handleDelete = (id) => {
        dispatch({ type: 'DELETE', payload: id });
    };

    return (
        <div className="min-h-screen bg-neutral-900 text-white p-8 flex justify-center">
            <div className="w-full max-w-lg">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent mb-6 text-center">
                    Task 5: Todo with Debounce
                </h2>

                <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700 shadow-xl mb-6">
                    <form onSubmit={handleAdd} className="flex gap-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Add a new task..."
                            className="flex-1 bg-neutral-900 border border-neutral-600 rounded px-4 py-2 text-white focus:border-teal-500 focus:outline-none transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim()}
                            className="bg-teal-600 hover:bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded font-semibold transition-colors"
                        >
                            Add
                        </button>
                    </form>

                    <div className="mt-2 h-6 text-xs text-gray-500 flex justify-between items-center">
                        <span>
                            {inputValue !== debouncedValue ? 'Typing...' : debouncedValue ? 'Draft saved' : ''}
                        </span>
                        <span>Total Added: {totalAdded}</span>
                    </div>
                </div>

                <ul className="space-y-3">
                    {todos.map(todo => (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center bg-neutral-800 p-4 rounded border border-neutral-700 hover:border-neutral-500 transition-colors group"
                        >
                            <span className="break-all">{todo.text}</span>
                            <button
                                onClick={() => handleDelete(todo.id)}
                                className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-300 bg-red-900/20 px-3 py-1 rounded text-sm"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                    {todos.length === 0 && (
                        <div className="text-center text-gray-500 py-8 italic">
                            No tasks yet. Add one above!
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default TodoApp;
