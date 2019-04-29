import React, { useState } from 'react';

// Button that counts the number of likes and changes color every click
function LikeButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  // State to store number of likes
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      style={{ backgroundColor: colors[likes % colors.length], color: 'white', padding: '10px 20px', margin: '10px' }}
    >
      {/* Show total number of clicks */}
      {likes} Like{likes !== 1 && 's'}
    </button>
  );
}

export default LikeButton;
