import React from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import useFetchUsers from '../hooks/useFetchUsers';

const ApiHooksDemo = () => {
    const { products, loading: productsLoading, error: productsError } = useFetchProducts();
    const { users, loading: usersLoading, error: usersError } = useFetchUsers();

    return (
        <div className="space-y-12">

            {/* Products Section */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                        Products API
                    </h2>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold uppercase tracking-wide">
                        useFetchProducts
                    </span>
                </div>

                {productsLoading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-64 rounded-2xl bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
                        ))}
                    </div>
                )}

                {productsError && (
                    <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl border border-red-200 dark:border-red-800">
                        Error loading products: {productsError}
                    </div>
                )}

                {products && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map(product => (
                            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700 flex flex-col group">
                                <div className="h-48 flex items-center justify-center p-4 bg-white rounded-xl mb-4 relative overflow-hidden">
                                    <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <h3 className="font-bold text-gray-800 dark:text-white mb-2 line-clamp-1" title={product.title}>{product.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 flex-grow">{product.description}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">${product.price}</span>
                                    <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-indigo-500 hover:text-white text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Users Section */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                        Users API
                    </h2>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-bold uppercase tracking-wide">
                        useFetchUsers
                    </span>
                </div>

                {usersLoading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2].map(i => (
                            <div key={i} className="h-32 rounded-2xl bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
                        ))}
                    </div>
                )}

                {usersError && (
                    <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl border border-red-200 dark:border-red-800">
                        Error loading users: {usersError}
                    </div>
                )}

                {users && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {users.map(user => (
                            <div key={user.id} className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-cyan-500 overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <svg className="w-24 h-24 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{user.name}</h3>
                                    <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-3">@{user.username}</p>
                                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                            {user.email}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            {user.website}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default ApiHooksDemo;
