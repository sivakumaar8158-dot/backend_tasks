import { useState } from 'react';

const NumberChecker = () => {
  const [number, setNumber] = useState(0);

  let status;
  let color;

  if (number > 0) {
    status = 'Positive';
    color = 'green';
  } else if (number < 0) {
    status = 'Negative';
    color = 'red';
  } else {
    status = 'Zero';
    color = 'blue';
  }

  return (
    <div style={{ padding: '15px', border: '1px solid #999', borderRadius: '5px', margin: '10px' }}>
      <h3>Positive/Negative/Zero Checker</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter a number"
        style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <p><strong>Number:</strong> {number}</p>
      <p><strong>Status:</strong> <span style={{ fontSize: '18px', fontWeight: 'bold', color }}>
        {status}
      </span></p>
    </div>
  );
};

export default NumberChecker;
