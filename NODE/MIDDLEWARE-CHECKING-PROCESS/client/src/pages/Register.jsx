import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:3000/api/middlewareroute/create', {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
            console.log('Registration success:', response.data);
            alert(`${response.data.msg || 'Registration successful!'}\n\nYour Token: ${response.data.token}`);
            // Clear form
            setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        } catch (error) {
            console.error('Registration error:', error.response?.data || error.message);
            alert(error.response?.data?.msg || 'Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
                <div>
                    <h2 className="mt-2 text-center text-3xl font-extrabold text-white tracking-tight">
                        Register the User
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                disabled={isLoading}
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-500 text-white rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out disabled:opacity-50"
                                placeholder="Enter Your Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                disabled={isLoading}
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-500 text-white rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out disabled:opacity-50"
                                placeholder="Enter Valid Mail-ID"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                disabled={isLoading}
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-500 text-white rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out disabled:opacity-50"
                                placeholder="Enter Your Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900 transition duration-150 ease-in-out disabled:cursor-not-allowed disabled:bg-indigo-400">
                            {isLoading ? 'Processing...' : 'REGISTER'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
