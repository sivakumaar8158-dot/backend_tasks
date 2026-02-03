import React from 'react';
import useCounter from '../hooks/useCounter';
import useToggle from '../hooks/useToggle';
import useInput from '../hooks/useInput';
import useTimer from '../hooks/useTimer';

const BasicHooksDemo = () => {
    // useCounter
    const { count, increment, decrement, reset: resetCounter } = useCounter(0);

    // useToggle
    const [isToggled, toggle] = useToggle(false);

    // useInput
    const nameInput = useInput('');

    // useTimer
    const { seconds, isActive, start, stop, reset: resetTimer } = useTimer(0);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">

            {/* useCounter Demo */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                        useCounter
                    </h2>
                    <div className="flex flex-col items-center justify-center my-6">
                        <span className="text-6xl font-black text-gray-800 dark:text-white drop-shadow-sm font-mono">
                            {count}
                        </span>
                    </div>
                    <div className="flex justify-between gap-3 mt-6">
                        <button
                            className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 font-medium"
                            onClick={increment}
                        >
                            + Inc
                        </button>
                        <button
                            className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white rounded-xl shadow-lg shadow-pink-500/30 transition-all active:scale-95 font-medium"
                            onClick={decrement}
                        >
                            - Dec
                        </button>
                        <button
                            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-xl transition-all active:scale-95 font-medium"
                            onClick={resetCounter}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {/* useToggle Demo */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500 mb-4">
                        useToggle
                    </h2>
                    <div className="flex flex-col items-center justify-center my-6 min-h-[100px]">
                        <div
                            onClick={toggle}
                            className={`cursor-pointer w-20 h-10 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 duration-300 ease-in-out ${isToggled ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : ''}`}
                        >
                            <div className={`bg-white w-8 h-8 rounded-full shadow-md transform duration-300 ease-in-out ${isToggled ? 'translate-x-10' : ''}`}></div>
                        </div>
                        <p className={`mt-4 text-lg font-semibold tracking-wide ${isToggled ? 'text-emerald-500' : 'text-gray-400'}`}>
                            Status: {isToggled ? 'ON' : 'OFF'}
                        </p>
                    </div>
                    <button
                        className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl shadow-lg shadow-emerald-500/30 transition-all active:scale-95 font-bold tracking-wide"
                        onClick={toggle}
                    >
                        Toggle State
                    </button>
                </div>
            </div>

            {/* useInput Demo */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 mb-4">
                        useInput
                    </h2>
                    <div className="space-y-4 my-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Enter Text</label>
                            <input
                                type="text"
                                placeholder="Type here..."
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                value={nameInput.value}
                                onChange={nameInput.onChange}
                            />
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-dashed border-gray-300 dark:border-gray-600">
                            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Live Output</p>
                            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 break-words">
                                {nameInput.value || <span className="text-gray-400 italic">Start typing...</span>}
                            </p>
                        </div>
                    </div>
                    <button
                        className="w-full py-2 text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 font-medium transition-colors"
                        onClick={nameInput.reset}
                    >
                        Clear Input
                    </button>
                </div>
            </div>

            {/* useTimer Demo */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                        useTimer
                    </h2>
                    <div className="flex flex-col items-center justify-center my-4">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            {/* Simple SVG circle background for effect */}
                            <svg className="absolute w-full h-full transform -rotate-90">
                                <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-200 dark:text-gray-700" />
                                <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={377} strokeDashoffset={377 - (377 * (seconds % 60)) / 60} className={`text-cyan-500 transition-all duration-1000 ease-linear ${isActive ? '' : 'opacity-50'}`} />
                            </svg>
                            <span className="text-4xl font-mono font-bold text-gray-800 dark:text-white relative z-10">
                                {seconds}s
                            </span>
                        </div>

                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mt-4 ${isActive ? 'bg-cyan-100 text-cyan-800' : 'bg-gray-100 text-gray-800'}`}>
                            <span className={`w-2 h-2 rounded-full mr-2 ${isActive ? 'bg-cyan-500 animate-pulse' : 'bg-gray-400'}`}></span>
                            {isActive ? 'Running' : 'Stopped'}
                        </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mt-6">
                        <button
                            className={`py-2 rounded-xl font-medium transition-all ${isActive ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30'}`}
                            onClick={start}
                            disabled={isActive}
                        >
                            Start
                        </button>
                        <button
                            className={`py-2 rounded-xl font-medium transition-all ${!isActive ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/30'}`}
                            onClick={stop}
                            disabled={!isActive}
                        >
                            Stop
                        </button>
                        <button
                            className="py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-lg shadow-red-500/30 transition-all font-medium"
                            onClick={resetTimer}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicHooksDemo;
