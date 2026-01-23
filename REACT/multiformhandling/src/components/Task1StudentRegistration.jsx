import { useState } from 'react';

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    age: ''
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

  const isEligible = formData.age >= 18;

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">Student Registration</h2>
      <p className="text-slate-400 mb-8">Register for your course and track your eligibility</p>
      
      <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-slate-600/50 space-y-6">
        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Course</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
            placeholder="Web Development"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-lg border border-slate-600/50 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
            placeholder="20"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transform transition-all duration-300"
        >
          Submit Registration
        </button>
      </form>

      {submitted && (
        <div className="mt-8 animate-slideIn">
          {isEligible ? (
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/50 text-green-300 px-6 py-6 rounded-2xl backdrop-blur">
              <h3 className="font-black text-xl mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span> Registration Successful
              </h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-bold text-green-400">Name:</span> {formData.name}</p>
                <p><span className="font-bold text-green-400">Email:</span> {formData.email}</p>
                <p><span className="font-bold text-green-400">Course:</span> {formData.course}</p>
                <p><span className="font-bold text-green-400">Age:</span> {formData.age}</p>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/50 text-red-300 px-6 py-6 rounded-2xl backdrop-blur text-center">
              <p className="font-black text-xl flex items-center gap-2 justify-center">
                <span className="text-2xl">⚠️</span> Not Eligible for Course
              </p>
              <p className="text-sm mt-2">You must be 18 years old to register</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
