import withToggle from '../hoc/withToggle';

const LightMode = ({ isActive, toggle }) => {
  return (
    <div style={{
      padding: '15px',
      margin: '10px',
      backgroundColor: isActive ? '#ffffff' : '#1a1a1a',
      color: isActive ? '#000000' : '#ffffff',
      border: '2px solid #ffd700',
      borderRadius: '5px',
      transition: 'all 0.3s ease'
    }}>
      <h3>☀️ Light Mode</h3>
      <p>Status: {isActive ? 'ON' : 'OFF'}</p>
      <button onClick={toggle} style={{
        padding: '8px 16px',
        backgroundColor: isActive ? '#ffd700' : '#444',
        color: isActive ? '#000' : '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        {isActive ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};

export default withToggle(LightMode);
