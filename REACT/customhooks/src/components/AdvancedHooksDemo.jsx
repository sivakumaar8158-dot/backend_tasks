import React, { useState, useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import useDebounce from '../hooks/useDebounce';
import useLocalStorage from '../hooks/useLocalStorage';

const AdvancedHooksDemo = () => {
    // useWindowSize
    const { width, height } = useWindowSize();

    // useDebounce
    const [text, setText] = useState('');
    const debouncedText = useDebounce(text, 500);

    // useLocalStorage
    const [theme, setTheme] = useLocalStorage('theme', 'light');

    return (
        <div className="grid grid-cols-1 gap-8">

            {/* useWindowSize */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-1 shadow-xl transform transition-all hover:scale-[1.01]">
                <div className="bg-white dark:bg-gray-900 rounded-[1.4rem] p-8 h-full">
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">useWindowSize</h2>

                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center py-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative w-48 h-32 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700">
                                <div className="text-center">
                                    <p className="text-gray-500 text-sm uppercase tracking-wider font-bold">Width</p>
                                    <p className="text-4xl font-black text-indigo-500 font-mono">{width}px</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-gray-300 transform -rotate-90 md:rotate-0">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative w-48 h-32 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700">
                                <div className="text-center">
                                    <p className="text-gray-500 text-sm uppercase tracking-wider font-bold">Height</p>
                                    <p className="text-4xl font-black text-purple-500 font-mono">{height}px</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-gray-500">Resize your browser window to see updates in real-time.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* useDebounce */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">useDebounce</h2>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Real-time Input</label>
                            <input
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border-2 border-transparent focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-800 transition-all font-medium text-lg"
                                placeholder="Type fast..."
                            />
                        </div>

                        <div className="relative h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className={`absolute top-0 left-0 h-full bg-indigo-500 transition-all duration-300 ${text !== debouncedText ? 'w-full animate-pulse' : 'w-0'}`}></div>
                        </div>

                        <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-900/50">
                            <p className="text-xs font-bold text-indigo-500 uppercase mb-1">Debounced Value (0.5s delay)</p>
                            <p className="text-lg font-bold text-gray-800 dark:text-indigo-300 min-h-[1.75rem]">
                                {debouncedText}
                            </p>
                        </div>
                    </div>
                </div>

                {/* useLocalStorage */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">useLocalStorage</h2>
                    <p className="mb-6 text-gray-500">Persists state to browser LocalStorage. Refresh the page to see the value stick!</p>

                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-mono text-sm text-gray-400">Key: 'theme'</span>
                            <span className="font-mono text-sm text-gray-400">Value (Stored)</span>
                        </div>
                        <div className="font-mono text-xl font-bold text-gray-800 dark:text-white">
                            "{theme}"
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => setTheme('light')}
                            className={`flex-1 py-3 rounded-xl font-bold transition-all transform active:scale-95 border-2 ${theme === 'light' ? 'bg-amber-100 border-amber-400 text-amber-700' : 'bg-white border-gray-200 text-gray-400 hover:border-amber-300'}`}
                        >
                            Light
                        </button>
                        <button
                            onClick={() => setTheme('dark')}
                            className={`flex-1 py-3 rounded-xl font-bold transition-all transform active:scale-95 border-2 ${theme === 'dark' ? 'bg-slate-800 border-slate-600 text-white' : 'bg-white border-gray-200 text-gray-400 hover:border-slate-400'}`}
                        >
                            Dark
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvancedHooksDemo;
