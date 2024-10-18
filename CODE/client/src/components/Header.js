import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Range Anxiety</h1>
      <nav>
        <Link to="/">Range Estimation</Link>
        <Link to="/stations">Nearby Stations</Link>
        <Link to="/map">Map</Link>
      </nav>
    </header>
  );
};

export default Header;
