import React, {useState} from 'react';
import {UilMapMarker, UilSearch} from "@iconscout/react-unicons";

const Header = ({setQuery, units, setUnits}) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({q: city});
      setCity("")
    }
  }

  const handleSearchEnter = (event) => {
    if (event.key === 'Enter' && city !== "") {
      setQuery({q: city});
      setCity("")
    }
  }

  const handleUnitsChange = (e) => {
    const currentUnit = e.currentTarget.name;
    if (units !== currentUnit) setUnits(currentUnit);
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=> {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({lat, lon})
      })
    }
  }

  return (
    <div className="App__header">
      <div className="App__search">
        <input
          value={city}
          onChange={event => setCity(event.target.value)}
          onKeyUp={handleSearchEnter}
          type="text"
          className="App__search"
          placeholder="Enter location..."
        />
        <UilSearch
          onClick={handleSearchClick}
          className="App__search-btn"
        />
      </div>
      <UilMapMarker
        onClick={handleLocationClick}
        className="App__location-btn"
      />
      <div className="App__units">
        <button
          name="metric"
          onClick={handleUnitsChange}
          className="App__celsius-btn active"
        >
          °C
        </button>
        <div></div>
        <button
          name="imperial"
          onClick={handleUnitsChange}
          className="App__fahrenheit-btn"
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Header;