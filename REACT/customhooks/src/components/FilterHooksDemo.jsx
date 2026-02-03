import React, { useState, useEffect } from 'react';
import useSearch from '../hooks/useSearch';
import useFilterByCategory from '../hooks/useFilterByCategory';
import useSortByPrice from '../hooks/useSortByPrice';

// Mock Data
const MOCK_PRODUCTS = [
    { id: 1, title: 'Premium Wireless Headphones', category: 'Electronics', price: 299 },
    { id: 2, title: 'Ergonomic Office Chair', category: 'Furniture', price: 159 },
    { id: 3, title: 'Mechanical Gaming Keyboard', category: 'Electronics', price: 129 },
    { id: 4, title: 'Organic Green Tea', category: 'Food & Beverage', price: 25 },
    { id: 5, title: 'Smart Fitness Watch', category: 'Electronics', price: 199 },
    { id: 6, title: 'Minimalist Desk Lamp', category: 'Furniture', price: 45 },
    { id: 7, title: 'Wireless Mouse', category: 'Electronics', price: 49 },
    { id: 8, title: 'Gourmet Coffee Beans', category: 'Food & Beverage', price: 35 },
];

const FilterHooksDemo = () => {
    // We need to chain the hooks. 
    // Order: Filter -> Search -> Sort (or any order that makes sense)
    // But wait, hooks depend on data.
    // Ideally, we might want a composite hook, but let's demonstrate chaining here.

    // 1. Filter by Category
    const {
        selectedCategory,
        setSelectedCategory,
        categories,
        filteredItems: categoryFiltered
    } = useFilterByCategory(MOCK_PRODUCTS, 'category');

    // 2. Search (applied on categoryFiltered)
    const {
        query,
        setQuery,
        filteredItems: searchFiltered
    } = useSearch(categoryFiltered, 'title');

    // 3. Sort (applied on searchFiltered)
    const {
        sortOrder,
        setSortOrder,
        sortedItems: finalItems
    } = useSortByPrice(searchFiltered, 'price');

    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500 mb-2">
                    Smart Filtering
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Chainable hooks for powerful data manipulation
                </p>
                <div className="flex justify-center gap-2 mt-4 flex-wrap">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wide">useFilterByCategory</span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wide">useSearch</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold uppercase tracking-wide">useSortByPrice</span>
                </div>
            </div>

            {/* Controls */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 dark:shadow-none">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Search */}
                    <div>
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Search Products</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="e.g. Headphones..."
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all pl-10"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                    </div>

                    {/* Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Category</label>
                        <select
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all appearance-none cursor-pointer"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    {/* Sort */}
                    <div>
                        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Price Sorting</label>
                        <div className="flex bg-gray-50 dark:bg-gray-900 rounded-xl p-1 border border-gray-200 dark:border-gray-700">
                            <button
                                onClick={() => setSortOrder('none')}
                                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${sortOrder === 'none' ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Default
                            </button>
                            <button
                                onClick={() => setSortOrder('asc')}
                                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${sortOrder === 'asc' ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Low ↑
                            </button>
                            <button
                                onClick={() => setSortOrder('desc')}
                                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${sortOrder === 'desc' ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                High ↓
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {finalItems.length > 0 ? (
                    finalItems.map(item => (
                        <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-900 hover:shadow-xl transition-all group">
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-lg">
                                    {item.category}
                                </span>
                                <span className="text-lg font-bold text-orange-600 dark:text-orange-400">
                                    ${item.price}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-600 transition-colors">
                                {item.title}
                            </h3>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center text-gray-400">
                        <div className="text-6xl mb-4">😕</div>
                        <p className="text-xl font-medium">No results found</p>
                        <p>Try adjusting your filters</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterHooksDemo;
