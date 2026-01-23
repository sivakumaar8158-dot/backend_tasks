import { useState } from 'react';

export default function AddressForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: {
      street: '',
      city: '',
      pincode: ''
    }
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400 mb-2">Address Form</h2>
      <p className="text-slate-400 mb-8">Complete your address with nested object state</p>

      <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-slate-600/50 space-y-6">
        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Street Address</label>
          <input
            type="text"
            name="street"
            value={formData.address.street}
            onChange={handleAddressChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            placeholder="123 Main Street"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">City</label>
          <input
            type="text"
            name="city"
            value={formData.address.city}
            onChange={handleAddressChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            placeholder="New York"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.address.pincode}
            onChange={handleAddressChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
            placeholder="10001"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transform transition-all duration-300"
        >
          Submit Address
        </button>
      </form>

      {submitted && (
        <div className="mt-8 bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/50 text-green-300 px-6 py-6 rounded-2xl backdrop-blur animate-slideIn">
          <h3 className="font-black text-xl mb-4 flex items-center gap-2">
            <span className="text-2xl">📍</span> Full Address Details
          </h3>
          <div className="space-y-3 text-sm">
            <p><span className="font-bold text-green-400">Name:</span> {formData.name}</p>
            <p><span className="font-bold text-green-400">Street:</span> {formData.address.street}</p>
            <p><span className="font-bold text-green-400">City:</span> {formData.address.city}</p>
            <p><span className="font-bold text-green-400">Pincode:</span> {formData.address.pincode}</p>
          </div>
        </div>
      )}
    </div>
  );
}
