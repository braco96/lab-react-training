import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

// Component combining three SingleColorPicker components to select an RGB color
function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  // Current color to display
  const rgb = `rgb(${rValue}, ${gValue}, ${bValue})`;

  return (
    <div className="rgb-color-picker">
      {/* Render individual color pickers */}
      <SingleColorPicker color="r" value={rValue} onChange={(e) => setRValue(Number(e.target.value))} />
      <SingleColorPicker color="g" value={gValue} onChange={(e) => setGValue(Number(e.target.value))} />
      <SingleColorPicker color="b" value={bValue} onChange={(e) => setBValue(Number(e.target.value))} />
      {/* Final color preview */}
      <div style={{ width: '100px', height: '50px', backgroundColor: rgb, border: '1px solid black', marginTop: '10px' }}></div>
      <p>{rgb}</p>
    </div>
  );
}

export default RGBColorPicker;
