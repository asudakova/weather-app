import React, {useState, useCallback, useEffect} from 'react';
import {UilMapMarker, UilMultiply} from "@iconscout/react-unicons";
import { customDebounce } from '../services/debounce';

const Header = ({setQuery, units, setUnits}) => {
  const [city, setCity] = useState("");
  const [debouncedCity, setDebouncedCity] = useState('');

  useEffect(() => {
    if (debouncedCity !== '') {
      setQuery({q: debouncedCity});
    }
  }, [debouncedCity]);

  const handleInputChange = (event) => {
    setCity(event.target.value);
    debouceInput(event.target.value);
  };

  const debouceInput = useCallback(
    customDebounce((str) => setDebouncedCity(str), 700), []
  );

  const handleClearClick = () => {
    setCity('');
    setDebouncedCity('');
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=> {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({lat, lon})
      })
      setCity('');
      setDebouncedCity('');
    }
  }

  const handleUnitsChange = (e) => {
    const currentUnit = e.currentTarget.name;
    if (units !== currentUnit) setUnits(currentUnit);
  }

  return (
    <div className="App__header">
      <div className="App__search">
        <input
          value={city}
          onChange={handleInputChange}
          type="text"
          className="App__search"
          placeholder="Enter location..."
        />
        <UilMultiply
          onClick={handleClearClick}
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