import React, { useState, useEffect, useRef, useReducer } from 'react';


const scrollHistoryReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POSITION':
            return [action.payload, ...state].slice(0, 5);
        case 'CLEAR':
            return [];
        default:
            return state;
    }
};

const ScrollCounter = () => {
    const [scrollCount, setScrollCount] = useState(0);
    const [scrollHistory, dispatch] = useReducer(scrollHistoryReducer, []);

    
    const lastRun = useRef(Date.now());
    
    const prevScrollPos = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const now = Date.now();

            
            if (now - lastRun.current >= 1000) {
                setScrollCount(prev => prev + 1);
                dispatch({ type: 'ADD_POSITION', payload: currentScroll });

                
                prevScrollPos.current = currentScroll;
                lastRun.current = now;

                console.log(`Previous Scroll: ${prevScrollPos.current}, Current: ${currentScroll}`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-[300vh] bg-neutral-900 text-white p-6 relative">
            <div className="sticky top-20 bg-neutral-800 p-6 rounded-xl shadow-2xl border border-neutral-700 max-w-md mx-auto">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
                    Task 2: Scroll Tracker
                </h2>

                <div className="space-y-4">
                    <div className="flex justify-between items-center text-lg">
                        <span className="text-gray-400">Scroll Count (Throttled):</span>
                        <span className="font-mono text-2xl font-bold text-yellow-500">{scrollCount}</span>
                    </div>

                    <div className="border-t border-neutral-700 pt-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-gray-400">Last 5 Positions (px):</span>
                            <button
                                onClick={() => dispatch({ type: 'CLEAR' })}
                                className="text-xs bg-red-500/10 text-red-400 px-2 py-1 rounded hover:bg-red-500/20 transition-colors"
                            >
                                Clear History
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                            {scrollHistory.length === 0 ? (
                                <span className="text-gray-500 italic text-sm">No scroll data yet...</span>
                            ) : (
                                scrollHistory.map((pos, idx) => (
                                    <div key={idx} className="bg-neutral-900 px-3 py-2 rounded border border-neutral-700 flex justify-between items-center">
                                        <span className="text-gray-500 text-xs">#{idx + 1}</span>
                                        <span className="font-mono text-blue-400">{pos.toFixed(0)}px</span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="text-center text-xs text-gray-600 mt-4">
                        Scroll down to see the values update (1s throttle)
                    </div>
                </div>
            </div>

            
            <div className="absolute top-[50vh] left-0 w-full text-center text-gray-700 pointer-events-none">50% Viewport Height</div>
            <div className="absolute top-[100vh] left-0 w-full text-center text-gray-700 pointer-events-none">100% Viewport Height</div>
            <div className="absolute top-[150vh] left-0 w-full text-center text-gray-700 pointer-events-none">150% Viewport Height</div>
            <div className="absolute top-[200vh] left-0 w-full text-center text-gray-700 pointer-events-none">200% Viewport Height</div>
        </div>
    );
};

export default ScrollCounter;
