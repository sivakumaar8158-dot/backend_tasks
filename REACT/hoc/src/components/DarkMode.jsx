import withToggle from '../hoc/withToggle';

const DarkMode = ({ isActive, toggle }) => {
  return (
    <div style={{
      padding: '15px',
      margin: '10px',
      backgroundColor: isActive ? '#1a1a1a' : '#ffffff',
      color: isActive ? '#ffffff' : '#000000',
      border: '2px solid #333',
      borderRadius: '5px',
      transition: 'all 0.3s ease'
    }}>
      <h3>🌙 Dark Mode</h3>
      <p>Status: {isActive ? 'ON' : 'OFF'}</p>
      <button onClick={toggle} style={{
        padding: '8px 16px',
        backgroundColor: isActive ? '#333' : '#ffd700',
        color: isActive ? '#fff' : '#000',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        {isActive ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};

export default withToggle(DarkMode);
