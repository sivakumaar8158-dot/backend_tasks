import { useState } from 'react';

export default function UserProfile() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    city: 'New York'
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 3000);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">User Profile</h2>
      <p className="text-slate-400 mb-8">Edit and update your profile information</p>

      <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-slate-600/50 space-y-6">
        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transform transition-all duration-300"
        >
          Update Profile
        </button>
      </form>

      {successMessage && (
        <div className="mt-8 bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/50 text-green-300 px-6 py-6 rounded-2xl backdrop-blur text-center font-black text-lg animate-slideIn">
          <p className="flex items-center gap-2 justify-center">
            <span className="text-2xl">✅</span> Profile Updated Successfully
          </p>
        </div>
      )}

      <div className="mt-8 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 border border-indigo-500/50 text-indigo-300 p-6 rounded-2xl backdrop-blur">
        <h3 className="font-black text-lg mb-4 flex items-center gap-2">
          <span className="text-2xl">👤</span> Current Profile
        </h3>
        <div className="space-y-3 text-sm">
          <p><span className="font-bold text-indigo-400">Name:</span> {formData.name}</p>
          <p><span className="font-bold text-indigo-400">Email:</span> {formData.email}</p>
          <p><span className="font-bold text-indigo-400">City:</span> {formData.city}</p>
        </div>
      </div>
    </div>
  );
}
