import React, { useState, useEffect, useRef, useReducer, Suspense, lazy } from 'react';

const SearchResults = lazy(() => import('./SearchResults'));

const historyReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            if (state.includes(action.payload)) return state;
            return [action.payload, ...state].slice(0, 5); 
        case 'CLEAR':
            return [];
        default:
            return state;
    }
};

const DebouncedSearch = () => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [searchCount, setSearchCount] = useState(0);
    const [history, dispatch] = useReducer(historyReducer, []);

    const inputRef = useRef(null);

    
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    
    useEffect(() => {
        const handler = setTimeout(() => {
            if (query.trim()) {
                setDebouncedQuery(query);
                setSearchCount(prev => prev + 1);
                dispatch({ type: 'ADD', payload: query });
            }
        }, 1000); 

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Task 1: Debounced Search</h2>

            <div className="flex flex-col gap-4 max-w-md mx-auto">
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type to search..."
                    className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none transition-all placeholder-gray-500"
                />

                <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>Search Count: <span className="text-white font-bold">{searchCount}</span></span>
                    <button
                        onClick={() => dispatch({ type: 'CLEAR' })}
                        className="text-red-400 hover:text-red-300 transition-colors"
                    >
                        Clear History
                    </button>
                </div>

                {history.length > 0 && (
                    <div className="bg-gray-800 p-3 rounded border border-gray-700">
                        <h4 className="text-xs font-uppercase text-gray-500 mb-2">Recent Searches</h4>
                        <div className="flex flex-wrap gap-2">
                            {history.map((term, i) => (
                                <span key={i} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                                    {term}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <Suspense fallback={<div className="text-center p-4 text-gray-500">Loading results...</div>}>
                    {debouncedQuery && <SearchResults query={debouncedQuery} />}
                </Suspense>
            </div>
        </div>
    );
};

export default DebouncedSearch;
