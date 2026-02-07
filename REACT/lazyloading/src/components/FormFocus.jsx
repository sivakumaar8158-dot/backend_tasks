import React, { useState, useReducer, useRef, useEffect } from 'react';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIELD':
            return { ...state, [action.field]: action.value };
        case 'RESET':
            return { name: '', email: '', password: '' };
        default:
            return state;
    }
};

const FormFocus = () => {
    const [state, dispatch] = useReducer(formReducer, {
        name: '',
        email: '',
        password: ''
    });

    const [submitCount, setSubmitCount] = useState(0);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        nameRef.current?.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.name && state.email && state.password) {
            setSubmitCount(prev => prev + 1);
            alert(`Start submission #${submitCount + 1}\nData: ${JSON.stringify(state, null, 2)}`);
            dispatch({ type: 'RESET' });
            nameRef.current?.focus();
        } else {
            alert('Please fill all fields');
        }
    };

    const handleKeyDown = (e, nextRef) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            nextRef?.current?.focus();
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700">
                <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    Task 3: Focus Control
                </h2>

                <div className="mb-6 text-center">
                    <span className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
                        Submissions: <span className="font-bold text-white">{submitCount}</span>
                    </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                        <input
                            ref={nameRef}
                            type="text"
                            value={state.name}
                            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })}
                            onKeyDown={(e) => handleKeyDown(e, emailRef)}
                            className="w-full bg-gray-900 border border-gray-600 rounded p-2 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input
                            ref={emailRef}
                            type="email"
                            value={state.email}
                            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
                            onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                            className="w-full bg-gray-900 border border-gray-600 rounded p-2 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                        <input
                            ref={passwordRef}
                            type="password"
                            value={state.password}
                            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'password', value: e.target.value })}
                            
                            className="w-full bg-gray-900 border border-gray-600 rounded p-2 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="submit"
                            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded font-semibold transition-colors"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                dispatch({ type: 'RESET' });
                                nameRef.current?.focus();
                            }}
                            className="px-4 py-2 border border-gray-600 text-gray-300 rounded hover:bg-gray-700 transition-colors"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormFocus;
