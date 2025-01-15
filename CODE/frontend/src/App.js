import React from 'react';
import EVRangeEstimator from './components/EVRangeEstimator';
import ChargingStations from './components/ChargingStations';
import './App.css';

import logo from './logo.svg';

import './App.css';


function App() {
  return (
    <div className="container">
      <header className="text-center py-4 bg-primary text-white">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Charge Route</h1>
        
        <p>Estimate your EV range and find the nearest charging stations!</p>
        
      </header>
      <main>
        <EVRangeEstimator />
        <ChargingStations />
      </main>
      <footer className="text-center py-3 bg-dark text-white">
        <p>&copy; 2024 Charge Route</p>
      </footer>
    </div>
    
  );
}

export default App;
