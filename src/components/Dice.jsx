import React, { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

// Component representing a dice that changes value when clicked
function Dice() {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [currentImg, setCurrentImg] = useState(diceEmpty);

  const rollDice = () => {
    // Show empty dice immediately
    setCurrentImg(diceEmpty);
    // After 1 second, show random dice face
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setCurrentImg(diceImages[randomIndex]);
    }, 1000);
  };

  return <img src={currentImg} alt="dice" onClick={rollDice} style={{ width: '100px', cursor: 'pointer' }} />;
}

export default Dice;
