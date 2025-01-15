import React, { useState } from 'react';
import axios from 'axios';

const EVRangeEstimator = () => {
  const [batteryLevel, setBatteryLevel] = useState('');
  const [consumptionRate, setConsumptionRate] = useState('');
  const [range, setRange] = useState(null);

  const handleEstimate = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/range', {
        params: { batteryLevel, consumptionRate },
      });
      setRange(response.data.estimatedRange);
    } catch (error) {
      console.error('Error calculating range:', error);
    }
  };

  return (
    <div className="card my-4">
      <div className="card-header bg-info text-white">EV Range Estimator</div>
      <div className="card-body">
        <div className="mb-3">
          <label>Battery Level (%)</label>
          <input
            type="number"
            className="form-control"
            value={batteryLevel}
            onChange={(e) => setBatteryLevel(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Consumption Rate (km per 1% charge)</label>
          <input
            type="number"
            className="form-control"
            value={consumptionRate}
            onChange={(e) => setConsumptionRate(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleEstimate}>
          Estimate Range
        </button>
        {range && (
          <div className="mt-3 alert alert-success">
            Estimated Range: {range} km
          </div>
        )}
      </div>
    </div>
  );
};

export default EVRangeEstimator;
