import React from 'react';

// Component that renders a styled credit card
function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  // Obfuscate the card number leaving the last 4 digits
  const hiddenNumber = `   ${number.slice(-4)}`;

  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color, borderRadius: '10px', padding: '20px', width: '300px', margin: '10px' }}>
      {/* Show card type image based on the type prop */}
      <div className="type" style={{ textAlign: 'right' }}>{type}</div>
      {/* Display the masked number */}
      <div className="number" style={{ fontSize: '1.5em', margin: '10px 0' }}>{hiddenNumber}</div>
      <div className="details" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8em' }}>
        {/* Format expiration date */}
        <span>
          Expires {String(expirationMonth).padStart(2, '0')}/{String(expirationYear).slice(-2)} {bank}
        </span>
        <span>{owner}</span>
      </div>
    </div>
  );
}

export default CreditCard;
