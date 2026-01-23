import { useState } from 'react';

const ColorChanger = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['red', 'blue', 'green', 'orange', 'purple', 'brown'];
  const colorNames = ['Red', 'Blue', 'Green', 'Orange', 'Purple', 'Brown'];
  const currentColor = colors[colorIndex];
  const currentColorName = colorNames[colorIndex];

  const handleChangeColor = () => {
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <div style={{ padding: '15px', border: '1px solid #999', borderRadius: '5px', margin: '10px' }}>
      <h3>🎨 Text Color Changer</h3>
      <button
        onClick={handleChangeColor}
        style={{
          padding: '10px 20px',
          backgroundColor: currentColor,
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '10px',
          fontSize: '16px'
        }}
      >
        Change Color
      </button>
      <p style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: currentColor,
        transition: 'color 0.3s ease'
      }}>
        This text is {currentColorName}!
      </p>
    </div>
  );
};

export default ColorChanger;
