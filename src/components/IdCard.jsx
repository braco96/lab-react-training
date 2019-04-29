import React from 'react';

// Component to display a personal ID card based on provided props
// We keep it simple and render each piece of information received
function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="id-card">
      {/* Render user picture */}
      <img src={picture} alt="user" />
      {/* Display personal details */}
      <div>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height}cm</p>
        {/* Convert birth date to a readable string */}
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
