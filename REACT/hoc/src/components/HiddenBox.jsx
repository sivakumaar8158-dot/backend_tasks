import withShowHide from '../hoc/withShowHide';

const HiddenBox = ({ isVisible, toggle }) => {
  return (
    <div style={{ padding: '10px', margin: '10px' }}>
      <button onClick={toggle} style={{ padding: '8px 16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginBottom: '10px' }}>
        {isVisible ? 'Hide' : 'Show'} Box
      </button>
      {isVisible && (
        <div style={{ padding: '20px', backgroundColor: '#e3f2fd', border: '2px solid blue', borderRadius: '5px' }}>
          <p>This is a hidden box that can be toggled!</p>
        </div>
      )}
    </div>
  );
};

export default withShowHide(HiddenBox);
