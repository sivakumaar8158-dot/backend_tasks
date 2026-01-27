import { useEffect, useState } from 'react';

function Dashboard({ user, onLogout }) {
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    // If user data is not passed via props, fetch from localStorage
    if (!userData) {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        setUserData(JSON.parse(currentUser));
      }
    }
  }, [userData]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    onLogout();
  };

  if (!userData) {
    return (
      <div className="dashboard-container">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h1>Welcome to Dashboard</h1>
        
        <div className="user-info">
          <h2>User Information</h2>
          <div className="info-section">
            <div className="info-item">
              <label>Full Name:</label>
              <p>{userData.fullName}</p>
            </div>
            
            <div className="info-item">
              <label>Email:</label>
              <p>{userData.email}</p>
            </div>
            
            <div className="info-item">
              <label>User ID:</label>
              <p>{userData.id}</p>
            </div>
            
            <div className="info-item">
              <label>Registered At:</label>
              <p>{userData.registeredAt}</p>
            </div>
          </div>
        </div>

        <button onClick={handleLogout} className="btn logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
