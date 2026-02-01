import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PreviousValueTracker from './components/PreviousValueTracker';
import AutoFocusForm from './components/AutoFocusForm';
import RenderCountForm from './components/RenderCountForm';
import PreventSubmitForm from './components/PreventSubmitForm';
import TimerSubmitForm from './components/TimerSubmitForm';
import InputComparisonForm from './components/InputComparisonForm';
import ScrollToErrorForm from './components/ScrollToErrorForm';

const App = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-white drop-shadow-md">
                    React Form & useEffect Tasks
                </h1>

                <nav className="mb-8 p-4 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-xl">
                    <ul className="flex flex-wrap justify-center gap-4 text-white font-semibold">
                        <li><Link to="/task1" className="hover:bg-white/20 px-3 py-1 rounded transition">Task 1: Prev Value</Link></li>
                        <li><Link to="/task2" className="hover:bg-white/20 px-3 py-1 rounded transition">Task 2: Auto Focus</Link></li>
                        <li><Link to="/task3" className="hover:bg-white/20 px-3 py-1 rounded transition">Task 3: Render Count</Link></li>
                        <li><Link to="/task4" className="hover:bg-white/20 px-3 py-1 rounded transition">Task 4: Prevent Submit</Link></li>
                        <li><Link to="/task5" className="hover:bg-white/20 px-3 py-1 rounded transition">Task 5: Timer Submit</Link></li>
                        <li><Link to="/task6" className="hover:bg-white/20 px-3 py-1 rounded transition">Task 6: Comparison</Link></li>
                        <li><Link to="/task7" className="hover:bg-white/20 px-3 py-1 rounded transition">Task 7: Scroll Error</Link></li>
                    </ul>
                </nav>

                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl min-h-[400px]">
                    <Routes>
                        <Route path="/" element={
                            <div className="text-center mt-20">
                                <h2 className="text-2xl font-bold text-gray-700">Welcome to the React Tasks Dashboard</h2>
                                <p className="text-gray-500 mt-2">Select a task from the menu above to view the implementation.</p>
                            </div>
                        } />
                        <Route path="/task1" element={<PreviousValueTracker />} />
                        <Route path="/task2" element={<AutoFocusForm />} />
                        <Route path="/task3" element={<RenderCountForm />} />
                        <Route path="/task4" element={<PreventSubmitForm />} />
                        <Route path="/task5" element={<TimerSubmitForm />} />
                        <Route path="/task6" element={<InputComparisonForm />} />
                        <Route path="/task7" element={<ScrollToErrorForm />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;
