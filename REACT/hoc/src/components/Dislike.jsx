import withCount from '../hoc/withCount';

const Dislike = ({ count, decrement, reset }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid red', borderRadius: '5px', margin: '10px' }}>
      <h3>👎 Dislikes</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{count}</p>
      <button onClick={decrement} style={{ padding: '8px 16px', marginRight: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Dislike</button>
      <button onClick={reset} style={{ padding: '8px 16px', backgroundColor: 'gray', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Reset</button>
    </div>
  );
};

export default withCount(Dislike);
