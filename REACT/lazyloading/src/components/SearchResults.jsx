import React from 'react';

const SearchResults = ({ query }) => {
    
    const mockData = Array.from({ length: 20 }, (_, i) => `Result for "${query}" #${i + 1}`);

    return (
        <div className="mt-4 p-4 border border-gray-700 rounded bg-gray-800 animate-fade-in">
            <h3 className="text-lg font-semibold mb-2 text-white">Search Results for: <span className="text-blue-400">{query}</span></h3>
            {query ? (
                <ul className="space-y-1">
                    {mockData.map((item, index) => (
                        <li key={index} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-400">Start typing to see results...</p>
            )}
        </div>
    );
};

export default SearchResults;
