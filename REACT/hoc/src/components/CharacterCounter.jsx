import { useState } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  const charCount = text.length;
  const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <div style={{ padding: '15px', border: '1px solid #999', borderRadius: '5px', margin: '10px' }}>
      <h3>📝 Character Counter</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          minHeight: '100px',
          fontFamily: 'Arial',
          marginBottom: '10px'
        }}
      />
      <div style={{ display: 'flex', gap: '30px' }}>
        <p><strong>Characters:</strong> <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#4CAF50' }}>{charCount}</span></p>
        <p><strong>Words:</strong> <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#2196F3' }}>{wordCount}</span></p>
      </div>
    </div>
  );
};

export default CharacterCounter;
