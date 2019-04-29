import React from 'react';

// Component that displays a box with a background color based on RGB values
function BoxColor({ r, g, b }) {
  const rgb = `rgb(${r},${g},${b})`;

  // Convert to hexadecimal for display purposes
  const toHex = (value) => value.toString(16).padStart(2, '0');
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  return (
    <div className="box-color" style={{ backgroundColor: rgb, color: 'black', padding: '20px', margin: '10px 0' }}>
      {/* Show both RGB and HEX values */}
      {rgb} {hex}
    </div>
  );
}

export default BoxColor;
