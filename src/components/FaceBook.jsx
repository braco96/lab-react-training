import React, { useState } from 'react';
import profiles from '../data/berlin.json';

// Component that displays user profiles and allows filtering by country
function FaceBook() {
  // State to keep track of selected country
  const [selectedCountry, setSelectedCountry] = useState('');

  // Get list of unique countries from the dataset
  const countries = Array.from(new Set(profiles.map((p) => p.country)));

  return (
    <div className="facebook">
      {/* Render a button for each country to filter profiles */}
      <div style={{ margin: '10px 0' }}>
        {countries.map((country) => (
          <button
            key={country}
            onClick={() => setSelectedCountry(country)}
            style={{ backgroundColor: selectedCountry === country ? '#A3D2E2' : 'white', margin: '0 5px' }}
          >
            {country}
          </button>
        ))}
      </div>

      {/* Display the list of profiles */}
      {profiles.map((profile) => (
        <div
          key={profile.firstName + profile.lastName}
          style={{ display: 'flex', border: '1px solid black', margin: '5px 0', backgroundColor: selectedCountry === profile.country ? '#A3D2E2' : 'white' }}
        >
          <img src={profile.img} alt={profile.firstName} style={{ width: '100px', objectFit: 'cover', marginRight: '10px' }} />
          <div>
            <p><strong>First name:</strong> {profile.firstName}</p>
            <p><strong>Last name:</strong> {profile.lastName}</p>
            <p><strong>Country:</strong> {profile.country}</p>
            <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaceBook;
