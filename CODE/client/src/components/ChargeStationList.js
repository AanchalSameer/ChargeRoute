import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChargeStationList = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    axios.get('/api/stations').then((response) => {
      setStations(response.data);
    });
  }, []);

  return (
    <div className="station-list">
      <h2>Nearby Charging Stations</h2>
      <ul>
        {stations.map((station) => (
          <li key={station._id}>
            {station.name} - {station.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChargeStationList;
