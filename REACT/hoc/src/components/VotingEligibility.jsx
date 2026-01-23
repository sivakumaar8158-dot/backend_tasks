import { useState } from 'react';

const VotingEligibility = () => {
  const [age, setAge] = useState(0);

  const isEligible = age >= 18;

  return (
    <div style={{ padding: '15px', border: '1px solid #999', borderRadius: '5px', margin: '10px' }}>
      <h3>🗳️ Voting Eligibility</h3>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Enter your age"
        style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Status:</strong> <span style={{ fontSize: '18px', fontWeight: 'bold', color: isEligible ? 'green' : 'red' }}>
        {isEligible ? '✓ Eligible to Vote' : '✗ Not Eligible (Must be 18+)'}
      </span></p>
    </div>
  );
};

export default VotingEligibility;
