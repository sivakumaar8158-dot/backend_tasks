import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
  const [user, setUser] = useState(null);

  const toggleUser = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        name: "Siva Kumar",
        email: "siva@example.com",
        isActive: true
      });
    }
  };

  return (
    <div className="min-vh-100 bg-light font-sans text-dark">
      <NavBar />

      <div className="container text-center mb-4">
        <button
          onClick={toggleUser}
          className={`btn btn-lg fw-bold transition shadow-sm ${user
              ? "btn-danger"
              : "btn-primary"
            }`}
        >
          {user ? "Simulate Logout (Set User Null)" : "Simulate Login (Set User Object)"}
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
