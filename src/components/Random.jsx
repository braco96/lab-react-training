import React from 'react';

// Component that renders a random number between min and max
function Random({ min, max }) {
  // Generate a random integer within the specified range
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="random">
      Random value between {min} and {max} => {randomValue}
    </div>
  );
}

export default Random;
