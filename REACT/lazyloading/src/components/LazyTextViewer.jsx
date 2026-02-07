import React, { useReducer, useState, useRef, useEffect, Suspense, lazy } from 'react';

const TextView = lazy(() => import('./TextView'));

const task6Reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        case 'SET_FONT_SIZE':
            return { ...state, fontSize: Math.max(10, Math.min(40, action.payload)) };
        default:
            return state;
    }
};

const LazyTextViewer = () => {
    const [state, dispatch] = useReducer(task6Reducer, {
        theme: 'light',
        fontSize: 18
    });

    const [changeCount, setChangeCount] = useState(0);
    const prevFontSize = useRef(18);

    useEffect(() => {
        prevFontSize.current = state.fontSize;
    }, [state.fontSize]);

    const handleAction = (action) => {
        setChangeCount(prev => prev + 1);
        dispatch(action);
    };

    return (
        <div className={`min-h-screen p-8 transition-colors duration-300 ${state.theme === 'dark' ? 'bg-black' : 'bg-gray-100'}`}>
            <div className="max-w-3xl mx-auto">
                <h1 className={`text-4xl font-black mb-8 bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent inline-block border-b-4 border-pink-500 pb-2`}>
                    Task 6: Reader View
                </h1>

                <div className={`p-6 rounded-2xl shadow-lg border ${state.theme === 'dark' ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-gray-200'} mb-8`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                        <div className="bg-opacity-10 bg-current p-4 rounded-lg">
                            <span className={`block text-xs uppercase tracking-wider mb-1 ${state.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Total Adjustments</span>
                            <span className={`text-3xl font-mono ${state.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{changeCount}</span>
                        </div>
                        <div className="bg-opacity-10 bg-current p-4 rounded-lg">
                            <span className={`block text-xs uppercase tracking-wider mb-1 ${state.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Previous Font Size</span>
                            <span className={`text-3xl font-mono ${state.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{prevFontSize.current}px</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <label className={`font-semibold ${state.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Theme Mode</label>
                            <button
                                onClick={() => handleAction({ type: 'TOGGLE_THEME' })}
                                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${state.theme === 'dark' ? 'bg-indigo-600' : 'bg-gray-300'}`}
                            >
                                <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${state.theme === 'dark' ? 'translate-x-7' : 'translate-x-1'}`} />
                            </button>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className={`font-semibold ${state.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Font Size</label>
                                <span className={`font-mono ${state.theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`}>{state.fontSize}px</span>
                            </div>
                            <input
                                type="range"
                                min="10"
                                max="40"
                                step="1"
                                value={state.fontSize}
                                onChange={(e) => handleAction({ type: 'SET_FONT_SIZE', payload: parseInt(e.target.value) })}
                                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                            />
                        </div>
                    </div>
                </div>

                <Suspense fallback={
                    <div className="animate-pulse flex space-x-4 mt-8">
                        <div className="flex-1 space-y-4 py-1">
                            <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-400 rounded"></div>
                                <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                }>
                    <TextView theme={state.theme} fontSize={state.fontSize} />
                </Suspense>
            </div>
        </div>
    );
};

export default LazyTextViewer;
