import React, { useState } from 'react';

// Component that toggles between two pictures when clicked
function ClickablePicture({ img, imgClicked }) {
  // Track whether the picture was clicked
  const [clicked, setClicked] = useState(false);

  return (
    <img
      src={clicked ? imgClicked : img}
      alt="clickable"
      onClick={() => setClicked(!clicked)}
      style={{ cursor: 'pointer', margin: '10px' }}
    />
  );
}

export default ClickablePicture;
