import React, { useState } from 'react';

// Component to cycle through a list of images
function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  // Helper to move to previous image
  const handleLeftClick = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  // Helper to move to next image
  const handleRightClick = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="carousel" style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
      <button onClick={handleLeftClick}>Left</button>
      {/* Display current image */}
      <img src={images[index]} alt="carousel" style={{ width: '200px', margin: '0 10px' }} />
      <button onClick={handleRightClick}>Right</button>
    </div>
  );
}

export default Carousel;
