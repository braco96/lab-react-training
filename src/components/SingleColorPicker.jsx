import React from 'react';

// Component allowing the user to select a single RGB value
function SingleColorPicker({ color, value, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
      {/* Colored square representing the current value */}
      <div
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: `rgb(${color === 'r' ? value : 0}, ${color === 'g' ? value : 0}, ${color === 'b' ? value : 0})`,
          marginRight: '10px',
        }}
      ></div>
      <label style={{ marginRight: '10px' }}>{color.toUpperCase()}</label>
      <input type="number" value={value} onChange={onChange} min="0" max="255" />
    </div>
  );
}

export default SingleColorPicker;
