import { useState } from 'react';

const SquareCube = () => {
  const [number, setNumber] = useState(0);

  const square = number * number;
  const cube = number * number * number;

  return (
    <div style={{ padding: '15px', border: '1px solid #999', borderRadius: '5px', margin: '10px' }}>
      <h3>Square & Cube Calculator</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter a number"
        style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <p><strong>Number:</strong> {number}</p>
      <p><strong>Square (n²):</strong> <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#FF9800' }}>{square}</span></p>
      <p><strong>Cube (n³):</strong> <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#2196F3' }}>{cube}</span></p>
    </div>
  );
};

export default SquareCube;
