import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Task1_SingleInput from './components/Task1_SingleInput';
import Task2_TwoInputsValidation from './components/Task2_TwoInputsValidation';
import Task3_StateObject from './components/Task3_StateObject';
import Task4_LoginForm from './components/Task4_LoginForm';
import Task5_MultiStepForm from './components/Task5_MultiStepForm';
import Task6_LocalStorage from './components/Task6_LocalStorage';

function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<Layout />}>
        <Route path="task1" element={<Task1_SingleInput />} />
        <Route path="task2" element={<Task2_TwoInputsValidation />} />
        <Route path="task3" element={<Task3_StateObject />} />
        <Route path="task4" element={<Task4_LoginForm />} />
        <Route path="task5" element={<Task5_MultiStepForm />} />
        <Route path="task6" element={<Task6_LocalStorage />} />
      </Route>

      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
