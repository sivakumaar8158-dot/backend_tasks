import React, { useReducer, useState, useRef, useEffect, Suspense, lazy } from 'react';

const TextPreview = lazy(() => import('./TextPreview'));

const settingsReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        case 'SET_FONT_SIZE':
            return { ...state, fontSize: Math.max(12, Math.min(32, action.payload)) };
        default:
            return state;
    }
};

const ThemeFontController = () => {
    const [state, dispatch] = useReducer(settingsReducer, {
        theme: 'dark',
        fontSize: 16
    });

    const [changeCount, setChangeCount] = useState(0);
    const prevFontSize = useRef(16);

   
    useEffect(() => {
        if (prevFontSize.current !== state.fontSize) {
            prevFontSize.current = state.fontSize;
        }
    }, [state.fontSize]);

    const handleChange = (action) => {
        setChangeCount(prev => prev + 1);
        dispatch(action);
    };

    return (
        <div className="min-h-screen bg-gray-900 p-6 flex flex-col items-center">
            <div className="w-full max-w-2xl">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-6">
                    Task 4: Theme & Font Controller
                </h2>

                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-6 shadow-lg">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-400">Total Changes: {changeCount}</span>
                        <span className="text-gray-500 text-sm">Previous Font Size: {prevFontSize.current}px</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
                        <div className="flex items-center gap-4">
                            <label className="text-gray-300 font-medium">Theme:</label>
                            <button
                                onClick={() => handleChange({ type: 'TOGGLE_THEME' })}
                                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${state.theme === 'dark'
                                        ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                                        : 'bg-gray-700 text-white hover:bg-gray-600'
                                    }`}
                            >
                                {state.theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                            </button>
                        </div>

                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <label className="text-gray-300 font-medium whitespace-nowrap">Font Size:</label>
                            <input
                                type="range"
                                min="12"
                                max="32"
                                value={state.fontSize}
                                onChange={(e) => handleChange({ type: 'SET_FONT_SIZE', payload: parseInt(e.target.value) })}
                                className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-teal-500"
                            />
                            <span className="text-white font-mono w-8">{state.fontSize}</span>
                        </div>
                    </div>
                </div>

                <Suspense fallback={
                    <div className="h-64 flex items-center justify-center bg-gray-800 rounded-lg animate-pulse">
                        <span className="text-gray-500">Loading Preview...</span>
                    </div>
                }>
                    <TextPreview theme={state.theme} fontSize={state.fontSize} />
                </Suspense>
            </div>
        </div>
    );
};

export default ThemeFontController;
