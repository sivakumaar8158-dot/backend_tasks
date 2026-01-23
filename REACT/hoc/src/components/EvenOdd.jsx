import { useState } from 'react';

const EvenOdd = () => {
  const [number, setNumber] = useState(0);

  const isEven = number % 2 === 0;

  return (
    <div style={{ padding: '15px', border: '1px solid #999', borderRadius: '5px', margin: '10px' }}>
      <h3>Even/Odd Checker</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter a number"
        style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <p><strong>Number:</strong> {number}</p>
      <p><strong>Status:</strong> <span style={{ fontSize: '18px', fontWeight: 'bold', color: isEven ? 'green' : 'orange' }}>
        {isEven ? 'Even' : 'Odd'}
      </span></p>
    </div>
  );
};

export default EvenOdd;
