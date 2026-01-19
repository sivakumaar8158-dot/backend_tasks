import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ProductEditForm = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const productFromLocation = location.state?.product

  const [formData, setFormData] = useState({
    name: productFromLocation?.name || '',
    description: productFromLocation?.description || '',
    price: productFromLocation?.price || '',
    stock: productFromLocation?.stock || '',
    category: productFromLocation?.category || '',
  })

  const [isSaved, setIsSaved] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setHasChanges(true)
    setIsSaved(false)
  }

  const handleSave = () => {
    
    setIsSaved(true)
    setHasChanges(false)
    console.log('Form saved:', formData)
  }

  const handleReset = () => {
    setFormData({
      name: productFromLocation?.name || '',
      description: productFromLocation?.description || '',
      price: productFromLocation?.price || '',
      stock: productFromLocation?.stock || '',
      category: productFromLocation?.category || '',
    })
    setHasChanges(false)
    setIsSaved(false)
  }

  if (!productFromLocation) {
    return (
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 p-4 rounded">
          No product data found. Please navigate from the edit button.
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate('/products-to-edit')}
        className="mb-6 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
      >
        ← Back to Products
      </button>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Edit Product</h1>
          <p className="text-gray-600 mb-6">Modify product details and save changes</p>

          
          {isSaved && (
            <div className="mb-6 bg-green-100 border border-green-400 text-green-800 p-4 rounded">
              ✓ Product saved successfully!
            </div>
          )}

          {hasChanges && (
            <div className="mb-6 bg-blue-100 border border-blue-400 text-blue-800 p-4 rounded">
              ⚠ You have unsaved changes
            </div>
          )}

          
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSave()
            }}
            className="space-y-6"
          >
          
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors"
                required
              />
            </div>

            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors resize-none"
              />
            </div>

            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price ($) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Stock Quantity</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
            </div>

           
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors"
              >
                <option value="">Select a category</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Books">Books</option>
                <option value="Home">Home & Garden</option>
              </select>
            </div>

            
            <div className="flex gap-4 pt-6 border-t">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                💾 Save Changes
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex-1 bg-gray-400 text-white py-3 px-4 rounded-lg hover:bg-gray-500 transition-colors font-semibold"
              >
                ↺ Reset
              </button>
            </div>
          </form>

         
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <h3 className="font-semibold text-blue-900 mb-2">How it Works:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✓ Product data is received through useLocation state</li>
              <li>✓ Form fields are populated from location state</li>
              <li>✓ User modifications are stored in local React state</li>
              <li>✓ Save button updates the form state only (no URL changes)</li>
              <li>✓ All changes are made independently of location/URL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductEditForm
