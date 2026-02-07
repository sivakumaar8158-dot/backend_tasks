import React from 'react';
import './App.css';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1 className="main-title">React useReducer Tasks</h1>
        <p className="subtitle">Showcasing state management with useReducer & elegant UI</p>
      </header>

      <div className="tasks-grid">
        <Task1 />
        <Task2 />
        <Task3 />
        <Task4 />
      </div>
    </div>
  );
}

export default App;