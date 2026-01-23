import { useState } from 'react';
import StudentRegistration from './components/Task1StudentRegistration';
import ProductForm from './components/Task2ProductForm';
import UserProfile from './components/Task3UserProfile';
import LoginForm from './components/Task4LoginForm';
import AddressForm from './components/Task5AddressForm';
import './App.css';

export default function App() {
  const [activeTask, setActiveTask] = useState(1);

  const tasks = [
    { id: 1, title: 'Student Registration', icon: '🎓', color: 'from-blue-500 to-cyan-500' },
    { id: 2, title: 'Product Form', icon: '📦', color: 'from-green-500 to-emerald-500' },
    { id: 3, title: 'User Profile', icon: '👤', color: 'from-purple-500 to-pink-500' },
    { id: 4, title: 'Login Form', icon: '🔐', color: 'from-orange-500 to-red-500' },
    { id: 5, title: 'Address Form', icon: '📍', color: 'from-indigo-500 to-blue-500' }
  ];

  const taskComponents = {
    1: StudentRegistration,
    2: ProductForm,
    3: UserProfile,
    4: LoginForm,
    5: AddressForm
  };

  const ActiveComponent = taskComponents[activeTask];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="relative z-20 bg-gradient-to-r from-slate-800 to-slate-700 text-white py-12 px-6 border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2">
            Form Handling Master
          </h1>
          <p className="text-center text-slate-300 text-lg">Master state management with beautiful React forms</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-20 bg-slate-800/50 backdrop-blur border-b border-slate-700/50 sticky top-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 py-6 justify-center">
            {tasks.map(task => {
              const isActive = activeTask === task.id;
              return (
                <button
                  key={task.id}
                  onClick={() => setActiveTask(task.id)}
                  className={`relative px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? `bg-gradient-to-r ${task.color} text-white shadow-2xl shadow-blue-500/50`
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600/50'
                  }`}
                >
                  <span className="text-xl mr-2">{task.icon}</span>
                  <span className="hidden sm:inline">Task {task.id}:</span> {task.title}
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent to-white/10 animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-8 md:p-12">
          <div className="animate-fadeIn">
            <ActiveComponent />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-20 bg-gradient-to-r from-slate-800 to-slate-700 text-white py-8 mt-16 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-300 mb-2">✨ Beautiful React Forms with Complete State Management</p>
          <p className="text-slate-500 text-sm">© 2026 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
