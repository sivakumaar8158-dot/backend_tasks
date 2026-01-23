import withShowHide from '../hoc/withShowHide';

const SideBar = ({ isVisible, toggle }) => {
  return (
    <div style={{ padding: '10px', margin: '10px' }}>
      <button onClick={toggle} style={{ padding: '8px 16px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '10px' }}>
        {isVisible ? 'Collapse' : 'Expand'} Sidebar
      </button>
      {isVisible && (
        <div style={{ padding: '20px', backgroundColor: '#f3e5f5', border: '2px solid purple', borderRadius: '5px', width: '200px' }}>
          <h4>Sidebar Menu</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Settings</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default withShowHide(SideBar);
