import withCount from '../hoc/withCount';

const Like = ({ count, increment, reset }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid green', borderRadius: '5px', margin: '10px' }}>
      <h3>👍 Likes</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{count}</p>
      <button onClick={increment} style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Like</button>
      <button onClick={reset} style={{ padding: '8px 16px', backgroundColor: 'gray', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Reset</button>
    </div>
  );
};

export default withCount(Like);
