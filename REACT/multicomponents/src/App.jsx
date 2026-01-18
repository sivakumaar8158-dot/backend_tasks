import { useState } from 'react';
import './App.css';
import Task1_SingleInput from './components/Task1_SingleInput';
import Task2_TwoInputsValidation from './components/Task2_TwoInputsValidation';
import Task3_StateObject from './components/Task3_StateObject';
import Task4_LoginForm from './components/Task4_LoginForm';
import Task5_MultiStepForm from './components/Task5_MultiStepForm';
import Task6_LocalStorage from './components/Task6_LocalStorage';

function App() {
  const [activeTask, setActiveTask] = useState(1);

  const tasks = [
    { id: 1, title: 'Single Input Controlled Form', component: Task1_SingleInput },
    { id: 2, title: 'Two Inputs with Validation', component: Task2_TwoInputsValidation },
    { id: 3, title: 'State Object Form', component: Task3_StateObject },
    { id: 4, title: 'Login Form', component: Task4_LoginForm },
    { id: 5, title: 'Multi-Step Form', component: Task5_MultiStepForm },
    { id: 6, title: 'Form + LocalStorage', component: Task6_LocalStorage },
  ];

  const ActiveComponent = tasks.find(task => task.id === activeTask)?.component;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Forms - Interview Tasks</h1>
        <p>Master controlled components, validation, and state management</p>
      </header>

      <nav className="task-navigation">
        <div className="nav-buttons">
          {tasks.map(task => (
            <button
              key={task.id}
              onClick={() => setActiveTask(task.id)}
              className={`nav-btn ${activeTask === task.id ? 'active' : ''}`}
            >
              Task {task.id}
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content">
        {ActiveComponent && <ActiveComponent />}
      </main>
    </div>
  );
}

export default App;
