import React, { useState } from 'react';
import './App.css';
import BasicHooksDemo from './components/BasicHooksDemo';
import ApiHooksDemo from './components/ApiHooksDemo';
import FilterHooksDemo from './components/FilterHooksDemo';
import AdvancedHooksDemo from './components/AdvancedHooksDemo';

function App() {
  const [activeTab, setActiveTab] = useState('basic');

  const tabs = [
    { id: 'basic', label: 'Basic Hooks' },
    { id: 'api', label: 'API Hooks' },
    { id: 'filter', label: 'Filter/Search' },
    { id: 'advanced', label: 'Advanced' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-indigo-500 selection:text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">

        {/* Header */}
        <header className="text-center mb-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -z-10"></div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            React Hooks
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
            A collection of powerful custom hooks
          </p>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm w-fit mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${activeTab === tab.id
                ? 'text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl -z-10"></div>
              )}
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <main className="transition-all duration-500 ease-in-out">
          {activeTab === 'basic' && <BasicHooksDemo />}

          {activeTab === 'api' && <ApiHooksDemo />}

          {activeTab === 'filter' && <FilterHooksDemo />}

          {activeTab === 'advanced' && <AdvancedHooksDemo />}
        </main>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} React Custom Hooks Library</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
