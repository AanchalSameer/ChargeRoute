import React, { useState } from 'react';

const ChargingStations = () => {
  const [location, setLocation] = useState('');

  const handleFindStations = () => {
    const url = `https://www.google.com/maps/search/ev+charging+stations+near+${location}`;
    window.open(url, '_blank');
  };

  return (
    <div className="card my-4">
      <div className="card-header bg-success text-white">Find Charging Stations</div>
      <div className="card-body">
        <div className="mb-3">
          <label>Enter Location</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button className="btn btn-success" onClick={handleFindStations}>
          Find Stations
        </button>
      </div>
    </div>
  );
};

export default ChargingStations;
