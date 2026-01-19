import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ProductDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const product = location.state?.product

  
  const [price, setPrice] = useState(product?.price || 0)
  const [discount, setDiscount] = useState(0)

  const finalPrice = price - (price * discount) / 100

  const handlePriceChange = (e) => {
    setPrice(Number(e.target.value))
  }

  const handleDiscountChange = (e) => {
    setDiscount(Number(e.target.value))
  }

  if (!product) {
    return (
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 p-4 rounded">
          No product data found. Please navigate from the product list.
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Back to Products
        </button>
      </div>
    )
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate('/')}
        className="mb-6 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
      >
        ← Back to Products
      </button>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
        <p className="text-lg text-gray-600 mb-6">{product.description}</p>

        <div className="border-t border-gray-300 pt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Price Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Original Price</label>
              <input
                type="number"
                value={price}
                onChange={handlePriceChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Discount %</label>
              <input
                type="number"
                value={discount}
                onChange={handleDiscountChange}
                min="0"
                max="100"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Original Price:</span> ${price.toFixed(2)}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Discount:</span> ${(price * discount / 100).toFixed(2)} ({discount}%)
            </p>
            <p className="text-2xl font-bold text-blue-600">
              Final Price: ${finalPrice.toFixed(2)}
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-4 italic">
            Note: Price updates are stored in local component state and don't modify the URL location.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
