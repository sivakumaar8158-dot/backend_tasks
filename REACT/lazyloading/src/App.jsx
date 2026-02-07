import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

const Task1 = lazy(() => import('./components/DebouncedSearch'));
const Task2 = lazy(() => import('./components/ScrollCounter'));
const Task3 = lazy(() => import('./components/FormFocus'));
const Task4 = lazy(() => import('./components/ThemeFontController'));
const Task5 = lazy(() => import('./components/TodoApp'));
const Task6 = lazy(() => import('./components/LazyTextViewer'));

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 font-sans">
      <nav className="p-4 bg-neutral-800 border-b border-neutral-700 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            React Advanced Tasks
          </h1>
          <div className="flex gap-2 overflow-x-auto py-2 no-scrollbar">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Link
                key={num}
                to={`/task${num}`}
                className="px-4 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-500 transition-colors text-sm font-medium whitespace-nowrap"
              >
                Task {num}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-6">
        <Suspense fallback={
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Navigate to="/task1" replace />} />
            <Route path="/task1" element={<Task1 />} />
            <Route path="/task2" element={<Task2 />} />
            <Route path="/task3" element={<Task3 />} />
            <Route path="/task4" element={<Task4 />} />
            <Route path="/task5" element={<Task5 />} />
            <Route path="/task6" element={<Task6 />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
