import { useNavigate } from 'react-router-dom'

const OrderList = () => {
  const navigate = useNavigate()

  const orders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      items: ['Laptop', 'Mouse'],
      total: 1250,
      currentStatus: 'Processing',
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      items: ['Phone', 'Charger'],
      total: 900,
      currentStatus: 'Shipped',
    },
    {
      id: 'ORD-003',
      customer: 'Mike Johnson',
      items: ['Tablet', 'Case'],
      total: 550,
      currentStatus: 'Pending',
    },
  ]

  const handleViewOrder = (order) => {
    
    navigate('/order-details', { state: { order } })
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate('/')}
        className="mb-6 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
      >
        ← Back to Home
      </button>

      <h1 className="text-4xl font-bold mb-8 text-gray-800">Orders</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{order.id}</h3>
                <p className="text-gray-600 mb-2">Customer: {order.customer}</p>
                <p className="text-gray-600 mb-2">Items: {order.items.join(', ')}</p>
                <p className="text-xl font-semibold text-blue-600">${order.total}</p>
              </div>

              <div className="w-full md:w-auto flex gap-3">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                    order.currentStatus === 'Processing'
                      ? 'bg-yellow-100 text-yellow-800'
                      : order.currentStatus === 'Shipped'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {order.currentStatus}
                </span>

                <button
                  onClick={() => handleViewOrder(order)}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Manage
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderList
