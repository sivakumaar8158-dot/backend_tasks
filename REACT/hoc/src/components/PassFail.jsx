import { useState } from 'react';

const PassFail = () => {
  const [marks, setMarks] = useState(0);

  const isPassed = marks >= 40;

  return (
    <div style={{ padding: '15px', border: '1px solid #999', borderRadius: '5px', margin: '10px' }}>
      <h3>📊 Pass/Fail Checker</h3>
      <input
        type="number"
        value={marks}
        onChange={(e) => setMarks(Number(e.target.value))}
        placeholder="Enter marks (0-100)"
        min="0"
        max="100"
        style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <p><strong>Marks:</strong> {marks}</p>
      <p><strong>Status:</strong> <span style={{
        fontSize: '18px',
        fontWeight: 'bold',
        color: isPassed ? 'green' : 'red',
        padding: '5px 10px',
        backgroundColor: isPassed ? '#e8f5e9' : '#ffebee',
        borderRadius: '4px'
      }}>
        {isPassed ? '✓ PASS' : '✗ FAIL'}
      </span></p>
    </div>
  );
};

export default PassFail;
