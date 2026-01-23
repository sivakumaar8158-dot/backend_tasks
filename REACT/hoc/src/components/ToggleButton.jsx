import { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ padding: '15px', border: '1px solid #999', borderRadius: '5px', margin: '10px' }}>
      <h3>ON/OFF Toggle</h3>
      <button
        onClick={() => setIsOn(!isOn)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: isOn ? '#4CAF50' : '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
      <p><strong>Current Status:</strong> <span style={{ fontSize: '18px', fontWeight: 'bold', color: isOn ? 'green' : 'red' }}>
        {isOn ? 'ON' : 'OFF'}
      </span></p>
    </div>
  );
};

export default ToggleButton;
