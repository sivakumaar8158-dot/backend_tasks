import { useState } from 'react';

const PasswordToggle = () => {
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ padding: '15px', border: '1px solid #999', borderRadius: '5px', margin: '10px' }}>
      <h3>🔐 Password Show/Hide</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <input
          type={isVisible ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1 }}
        />
        <button
          onClick={() => setIsVisible(!isVisible)}
          style={{
            padding: '8px 12px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {isVisible ? '👁️ Hide' : '👁️ Show'}
        </button>
      </div>
      <p><strong>Password:</strong> {isVisible ? password : '•'.repeat(password.length)}</p>
    </div>
  );
};

export default PasswordToggle;
