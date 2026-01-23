import { useState } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'user'
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError('All fields are required');
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 mb-2">Login Form</h2>
      <p className="text-slate-400 mb-8">Secure login with role-based access</p>

      <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-slate-600/50 space-y-6">
        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
            placeholder="admin"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
          >
            <option value="admin">🔐 Admin</option>
            <option value="user">👤 User</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 hover:scale-105 transform transition-all duration-300"
        >
          Login
        </button>
      </form>

      {error && (
        <div className="mt-8 bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/50 text-red-300 px-6 py-6 rounded-2xl backdrop-blur animate-slideIn">
          <p className="font-black text-lg flex items-center gap-2">
            <span className="text-2xl">❌</span> {error}
          </p>
        </div>
      )}

      {submitted && !error && (
        <div className={`mt-8 animate-slideIn bg-gradient-to-br ${
          formData.role === 'admin'
            ? 'from-purple-900/30 to-indigo-900/30 border-purple-500/50'
            : 'from-green-900/30 to-emerald-900/30 border-green-500/50'
        } border px-6 py-6 rounded-2xl backdrop-blur`}>
          <h3 className={`font-black text-xl mb-4 flex items-center gap-2 ${
            formData.role === 'admin' ? 'text-purple-300' : 'text-green-300'
          }`}>
            <span className="text-2xl">{formData.role === 'admin' ? '👑' : '👤'}</span> 
            {formData.role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}
          </h3>
          <div className={formData.role === 'admin' ? 'text-purple-300' : 'text-green-300'}>
            <p className="text-sm mb-2"><span className="font-bold">Welcome,</span> {formData.username}</p>
            <p className="text-sm"><span className="font-bold">Role:</span> {formData.role.charAt(0).toUpperCase() + formData.role.slice(1)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
