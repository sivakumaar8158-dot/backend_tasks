import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const OrderDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const order = location.state?.order

  const [orderStatus, setOrderStatus] = useState(order?.currentStatus || 'Pending')

  const statusOptions = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']

  const handleStatusChange = (newStatus) => {
    setOrderStatus(newStatus)
  }

  if (!order) {
    return (
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 p-4 rounded">
          No order data found. Please navigate from the orders list.
        </div>
        <button
          onClick={() => navigate('/orders')}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Back to Orders
        </button>
      </div>
    )
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => navigate('/orders')}
          className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
        >
          ← Back to Orders
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{order.id}</h1>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Customer</label>
                <p className="text-xl text-gray-800 font-semibold">{order.customer}</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Total Amount</label>
                <p className="text-xl text-blue-600 font-bold">${order.total}</p>
              </div>
            </div>

           
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Items</h2>
              <ul className="space-y-2">
                {order.items.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

       
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-8 sticky top-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Status</h2>

            <div className="mb-6">
              <div
                className={`px-4 py-3 rounded-full text-center font-bold text-lg mb-4 ${
                  orderStatus === 'Pending'
                    ? 'bg-gray-100 text-gray-800'
                    : orderStatus === 'Processing'
                      ? 'bg-yellow-100 text-yellow-800'
                      : orderStatus === 'Shipped'
                        ? 'bg-blue-100 text-blue-800'
                        : orderStatus === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                }`}
              >
                {orderStatus}
              </div>
            </div>

            <div className="space-y-2 mb-6">
              {statusOptions.map((status) => (
                <button
                  key={status}
                  onClick={() => handleStatusChange(status)}
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-all ${
                    orderStatus === status
                      ? 'bg-blue-600 text-white ring-2 ring-blue-800'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            <p className="text-xs text-gray-500 italic">
              Note: Status changes are stored locally in component state and don't modify the location or URL.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
