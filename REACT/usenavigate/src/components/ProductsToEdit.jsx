import { useNavigate } from 'react-router-dom'

const ProductsToEdit = () => {
  const navigate = useNavigate()

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'High quality wireless headphones with noise cancellation',
      price: 199.99,
      stock: 45,
      category: 'Electronics',
    },
    {
      id: 2,
      name: 'USB-C Cable',
      description: 'Fast charging USB-C cable, 2 meters long',
      price: 14.99,
      stock: 150,
      category: 'Electronics',
    },
    {
      id: 3,
      name: 'Laptop Stand',
      description: 'Adjustable aluminum laptop stand',
      price: 39.99,
      stock: 60,
      category: 'Electronics',
    },
  ]

  const handleEditProduct = (product) => {
    
    navigate('/product-edit', { state: { product } })
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate('/')}
        className="mb-6 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
      >
        ← Back to Home
      </button>

      <h1 className="text-4xl font-bold mb-8 text-gray-800">Products for Editing</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-3">{product.description}</p>

            <div className="mb-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Price:</span>
                <span className="font-bold text-blue-600">${product.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Stock:</span>
                <span className="font-bold text-gray-800">{product.stock} units</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Category:</span>
                <span className="font-bold text-gray-800">{product.category}</span>
              </div>
            </div>

            <button
              onClick={() => handleEditProduct(product)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              ✎ Edit Product
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-md p-6 max-w-2xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">About This Page</h3>
        <p className="text-gray-700 mb-4">
          This page demonstrates passing product data through useLocation state to a form component. Click "Edit Product"
          on any card to see the data transferred and allow modifications through React state.
        </p>
        <ul className="text-gray-700 space-y-2 text-sm">
          <li>✓ Product data passed via location.state</li>
          <li>✓ Form receives and displays the data</li>
          <li>✓ User can modify all fields</li>
          <li>✓ Changes stored in component state, not in URL</li>
          <li>✓ Save functionality updates local state only</li>
        </ul>
      </div>
    </div>
  )
}

export default ProductsToEdit
