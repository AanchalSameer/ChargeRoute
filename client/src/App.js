/* global google */

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [place, setPlace] = useState(null);
  const [distance, setDistance] = useState('');
  const [chargingStations, setChargingStations] = useState([]);

  useEffect(() => {
    // Load Google Maps API script
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBaR-Xh18tj4zuCiY4ADf96Y15FDKGdqDg&libraries=places"; // Replace YOUR_API_KEY with your actual API key
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = () => initializeMap();
    };

    const initializeMap = () => {
      const mapInstance = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
      setMap(mapInstance);

      const input = document.getElementById("location-input");
      const autocompleteInstance = new google.maps.places.Autocomplete(input);
      setAutocomplete(autocompleteInstance);

      autocompleteInstance.addListener("place_changed", () => {
        const selectedPlace = autocompleteInstance.getPlace();
        setPlace(selectedPlace);
        if (selectedPlace.geometry) {
          mapInstance.setCenter(selectedPlace.geometry.location);
          new google.maps.Marker({
            position: selectedPlace.geometry.location,
            map: mapInstance,
            title: selectedPlace.name,
          });
        }
      });
    };

    loadGoogleMapsScript();
  }, []);

  const handleSearch = () => {
    if (autocomplete && map && place && place.geometry) {
      const location = place.geometry.location;
      const service = new google.maps.places.PlacesService(map);
      const request = {
        location: location,
        radius: '5000', // 5 km radius
        type: ['charging_station'] // Type for EV charging stations
      };

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          setChargingStations(results);
          results.forEach((place) => {
            new google.maps.Marker({
              position: place.geometry.location,
              map: map,
              title: place.name,
            });
          });
        } else {
          console.error('Places service error:', status);
        }
      });
    } else {
      console.error('No place selected or invalid place.');
    }
  };

  const handleEstimate = () => {
    console.log(`Distance entered: ${distance}`);
    // Additional range estimation handling here
  };

  return (
    <div>
      <h1>EV Range Estimator</h1>
      <div id="search-bar">
        <input
          type="text"
          id="location-input"
          placeholder="Enter your location"
        />
        <button onClick={handleSearch} id="search-button">
          Search
        </button>
      </div>
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
      <div id="range-estimation">
        <label htmlFor="distance">Distance (km):</label>
        <input
          type="number"
          id="distance"
          placeholder="Enter distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <button onClick={handleEstimate} id="estimate-button">
          Estimate Range
        </button>
      </div>
      <div id="charging-stations">
        <h2>Nearby Charging Stations:</h2>
        <ul>
          {chargingStations.map((station, index) => (
            <li key={index}>
              <strong>{station.name}</strong><br />
              Address: {station.vicinity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
