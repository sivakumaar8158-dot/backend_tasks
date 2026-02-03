import { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [productsRes, categoriesRes] = await Promise.all([
                    fetch('https://fakestoreapi.com/products'),
                    fetch('https://fakestoreapi.com/products/categories')
                ]);

                if (!productsRes.ok || !categoriesRes.ok) {
                    throw new Error('Failed to fetch data');
                }

                const productsData = await productsRes.json();
                const categoriesData = await categoriesRes.json();

                setProducts(productsData);
                setCategories(categoriesData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    if (error) return (
        <div className="text-center text-red-500 p-10">
            Error: {error}
        </div>
    );

    return (
        <div className="container mx-auto p-4 max-w-7xl">
            {/* Header Section */}
            <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Our Products
                </h2>
                
                {/* Category Dropdown */}
                <div className="relative w-full md:w-64">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full p-3 pl-4 pr-10 text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer hover:border-blue-300"
                    >
                        <option value="all">Select Category</option>
                        {categories.map((category) => (
                            <option key={category} value={category} className="capitalize relative">
                                {category}
                            </option>
                        ))}
                    </select>
                    {/* Custom Arrow Icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
                            <div className="relative pt-4 px-4 bg-white h-48 flex items-center justify-center overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                                    {product.category}
                                </div>
                            </div>
                            
                            <div className="p-5 flex-grow flex flex-col justify-between">
                                <div>
                                    <h3 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-2" title={product.title}>
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-xl font-bold text-gray-900">
                                        ${product.price ? product.price.toFixed(2) : product.price}
                                    </span>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm cursor-pointer">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                    <div className="bg-gray-100 p-4 rounded-full mb-4">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
                    <p className="text-gray-500">No products available in this category.</p>
                </div>
            )}
        </div>
    );
};

export default ProductList;
