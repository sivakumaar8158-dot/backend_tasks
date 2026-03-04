import { useState, useEffect } from "react";
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fecthData = async () => {
    try {
      const dataFetch = await axios.get("http://localhost:5000/api/crud/getdata");
      setUsers(dataFetch.data.getdata);
    } catch (error) {
      alert(error?.response?.data?.msg || "Error fetching data");
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const added = await axios.post("http://localhost:5000/api/crud/insert", formData);
      alert(added.data.msg);
      setFormData({ name: "", email: "", age: "" });
      fecthData();
    } catch (error) {
      alert(error?.response?.data?.msg || "Error adding data");
    }
  };

  const handleEdit = (user) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setFormData({ name: user.name, email: user.email, age: user.age });
    setEditId(user._id);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedata = await axios.put(`http://localhost:5000/api/crud/updatedata/${editId}`, formData);
      alert(updatedata.data.msg);
      setFormData({ name: "", email: "", age: "" });
      setEditId("");
      fecthData();
    } catch (error) {
      alert(error?.response?.data?.msg || "Error updating data");
    }
  };

  const handleDelete = async (userid) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const deteleted = await axios.delete(`http://localhost:5000/api/crud/deletedata/${userid}`);
      alert(deteleted.data.msg);
      fecthData();
    } catch (error) {
      alert(error?.response?.data?.msg || "Error deleting data");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
            User Management
          </h1>
          <p className="text-lg text-purple-200/80 max-w-2xl mx-auto">
            Manage your users efficiently with this modern, responsive dashboard. Add, edit, or remove records with ease.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          
          <div className="lg:col-span-1 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl transition-all duration-300 hover:bg-white/12">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              {editId ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  Edit User
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  Add New User
                </>
              )}
            </h2>
            <form className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-purple-200 ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-purple-500/30 rounded-xl px-4 py-3 placeholder-purple-300/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-purple-50"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-purple-200 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-purple-500/30 rounded-xl px-4 py-3 placeholder-purple-300/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-purple-50"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-purple-200 ml-1">Age</label>
                <input
                  type="number"
                  name="age"
                  placeholder="e.g. 28"
                  value={formData.age}
                  onChange={handleChange}
                  min="1"
                  className="w-full bg-slate-900/50 border border-purple-500/30 rounded-xl px-4 py-3 placeholder-purple-300/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-purple-50"
                />
              </div>

              <div className="pt-4">
                {editId ? (
                  <div className="flex gap-3">
                    <button
                      onClick={handleUpdate}
                      className="flex-1 bg-linear-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-pink-500/30 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/40 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                      Update
                    </button>
                    <button
                      onClick={(e) => { e.preventDefault(); setEditId(""); setFormData({ name: "", email: "", age: "" }); }}
                      className="flex-none bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-slate-500"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleClick}
                    className="w-full bg-linear-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-purple-500/30 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 flex justify-center items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Save User
                  </button>
                )}
              </div>
            </form>
          </div>

         
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
              <h2 className="text-xl font-semibold text-white">Registered Users</h2>
              <span className="bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full text-xs font-medium border border-purple-500/30">
                {users.length} Total
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/20 text-purple-200 text-sm tracking-wider uppercase">
                    <th className="px-6 py-4 font-medium border-b border-white/5">S.no</th>
                    <th className="px-6 py-4 font-medium border-b border-white/5">Name</th>
                    <th className="px-6 py-4 font-medium border-b border-white/5">Email</th>
                    <th className="px-6 py-4 font-medium border-b border-white/5">Age</th>
                    <th className="px-6 py-4 font-medium border-b border-white/5 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {users.length > 0 ? (
                    users.map((e, index) => (
                      <tr
                        key={e._id || index}
                        className="hover:bg-white/3 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 text-slate-400 text-sm">#{index + 1}</td>
                        <td className="px-6 py-4 font-medium">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-linear-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-xs font-bold shadow-lg">
                              {e.name ? e.name.charAt(0).toUpperCase() : '?'}
                            </div>
                            {e.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-purple-200/70">{e.email}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-pink-100 bg-pink-500/20 rounded-full border border-pink-500/30">
                            {e.age}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center items-center gap-2">
                            <button
                              onClick={() => handleEdit(e)}
                              className="p-2 text-indigo-300 hover:text-white hover:bg-indigo-500/30 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                              title="Edit user"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleDelete(e._id)}
                              className="p-2 text-rose-400 hover:text-white hover:bg-rose-500/30 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-400"
                              title="Delete user"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-6 py-12 text-center text-slate-400">
                        <div className="flex flex-col items-center justify-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                          </svg>
                          <p>No users found. Add a user to get started.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;