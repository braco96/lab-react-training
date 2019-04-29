import React from 'react';

// Component displaying numbers from 1 to limit, highlighting even numbers
function NumbersTable({ limit }) {
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div className="numbers-table" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {numbers.map((number) => (
        <div
          key={number}
          style={{
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: number % 2 === 0 ? 'red' : 'white',
            border: '1px solid black',
          }}
        >
          {number}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
