import { useState } from 'react';

export default function ProductForm() {
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    quantity: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getStockStatus = () => {
    const qty = parseInt(formData.quantity);
    if (qty === 0) return { status: 'Out of Stock', icon: '❌', color: 'from-red-500 to-orange-500', bgGradient: 'from-red-900/30 to-orange-900/30', border: 'red-500/50', text: 'red-300' };
    if (qty < 5) return { status: 'Low Stock', icon: '⚠️', color: 'from-yellow-500 to-orange-500', bgGradient: 'from-yellow-900/30 to-orange-900/30', border: 'yellow-500/50', text: 'yellow-300' };
    return { status: 'In Stock', icon: '✅', color: 'from-green-500 to-emerald-500', bgGradient: 'from-green-900/30 to-emerald-900/30', border: 'green-500/50', text: 'green-300' };
  };

  const { status, icon, color, bgGradient, border, text } = submitted ? getStockStatus() : { status: '', icon: '', color: '', bgGradient: '', border: '', text: '' };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400 mb-2">Product Form</h2>
      <p className="text-slate-400 mb-8">Add products and track inventory status</p>

      <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-slate-600/50 space-y-6">
        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Product Name</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
            placeholder="Laptop"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
            placeholder="999.99"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
            placeholder="10"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 transform transition-all duration-300"
        >
          Submit Product
        </button>
      </form>

      {submitted && (
        <div className="mt-8 space-y-4 animate-slideIn">
          <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/50 text-blue-300 px-6 py-6 rounded-2xl backdrop-blur">
            <h3 className="font-black text-xl mb-4 flex items-center gap-2">
              <span className="text-2xl">📦</span> Product Details
            </h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-bold text-blue-400">Product:</span> {formData.productName}</p>
              <p><span className="font-bold text-blue-400">Price:</span> ${parseFloat(formData.price).toFixed(2)}</p>
              <p><span className="font-bold text-blue-400">Quantity:</span> {formData.quantity}</p>
            </div>
          </div>

          <div className={`bg-gradient-to-br ${bgGradient} border border-${border} text-${text} px-6 py-6 rounded-2xl backdrop-blur text-center font-bold`}>
            <p className="text-2xl mb-2">{icon}</p>
            <p className="text-lg">{status}</p>
          </div>
        </div>
      )}
    </div>
  );
}
