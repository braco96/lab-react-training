import React from 'react';
import Rating from './Rating';

// Component displaying driver information along with rating and car details
function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-card" style={{ backgroundColor: '#455EB5', color: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '20px', margin: '10px 0' }}>
      {/* Driver picture */}
      <img src={img} alt={name} style={{ width: '100px', borderRadius: '50%', marginRight: '20px' }} />
      {/* Driver details */}
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
