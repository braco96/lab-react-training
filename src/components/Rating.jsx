import React from 'react';

// Component that converts a numeric rating into stars
function Rating({ children }) {
  // Round the rating to nearest integer
  const value = Math.round(children);
  // Create an array of 5 elements and fill with stars based on value
  const stars = Array(5)
    .fill('☆')
    .map((star, index) => (index < value ? '★' : '☆'))
    .join('');

  return <div className="rating">{stars}</div>;
}

export default Rating;
