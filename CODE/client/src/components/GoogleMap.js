import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const GoogleMapComponent = ({ google }) => {
  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={{ lat: 40.712776, lng: -74.005974 }}
    >
      <Marker position={{ lat: 40.712776, lng: -74.005974 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(GoogleMapComponent);
