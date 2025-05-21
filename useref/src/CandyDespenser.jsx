import React, { useState } from 'react';

function CandyDespenser() {
  const initialCandies = [
    'snickers',
    'skittles',
    'twix',
    'milky way',
    'wandy mandy',
  ];
  const [candies, setCandies] = useState(initialCandies);
  const dispense = (candy) => {
    setCandies((allCandies) => allCandies.filter((c) => c !== candy));
  };
  return (
    <div>
      <h1>Candy Dispenser</h1>
      <div>
        <h2>Available candies</h2>
        {candies.length === 0 ? (
          <button
            onClick={() => {
              setCandies(initialCandies);
            }}
          >
            Refill
          </button>
        ) : (
          <ul>
            {candies.map((candy) => (
              <li key={candy}>
                <button
                  onClick={() => {
                    dispense(candy);
                  }}
                >
                  grab
                </button>
                {candy}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CandyDespenser;
