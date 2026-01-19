import { useNavigate } from 'react-router-dom'

const ProductList = () => {
  const navigate = useNavigate()

  const products = [
    { id: 1, name: 'Laptop', price: 1200, description: 'High performance laptop' },
    { id: 2, name: 'Phone', price: 800, description: 'Latest smartphone' },
    { id: 3, name: 'Tablet', price: 500, description: 'Portable tablet device' },
  ]

  const handleViewProduct = (product) => {
    
    navigate('/product-detail', { state: { product } })
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
            <button
              onClick={() => handleViewProduct(product)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
