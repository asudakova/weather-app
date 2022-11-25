import React from 'react';
import {UilMapMarker, UilSearch} from "@iconscout/react-unicons";

const Header = () => {
  return (
    <div className="App__header">
      <div className="App__search">
        <input
          type="text"
          className="App__search"
          placeholder="Enter location..."
        />
        <UilSearch className="App__search-btn"/>
      </div>
      <UilMapMarker className="App__location-btn"/>
      <div className="App__units">
        <p className="App__celsius-btn">°C</p>
        <div></div>
        <p className="App__fahrenheit-btn">°F</p>
      </div>
    </div>
  );
};

export default Header;