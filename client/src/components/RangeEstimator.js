import React, { useState } from 'react';

const RangeEstimator = () => {
  const [distance, setDistance] = useState('');
  const [range, setRange] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate EV range estimation logic here
    setRange(`Your estimated range is ${distance} km`);
  };

  return (
    <div className="range-estimator">
      <h2>Estimate Your EV Range</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter distance to travel"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <button type="submit">Estimate Range</button>
      </form>
      {range && <p>{range}</p>}
    </div>
  );
};

export default RangeEstimator;
