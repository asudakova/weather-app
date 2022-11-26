import React from 'react';
import {
  UilArrowDown,
  UilArrowUp,
  UilSun,
  UilSunset,
  UilTear,
  UilTemperatureHalf,
  UilWind
} from "@iconscout/react-unicons";

const MainWeather = ({weather, units}) => {
  return (
    <div className="App__main">
      <div className="App__info">
        <div className="App__left">
          <h1 className="App__title">{weather.name}, {weather.country}</h1>
          <div className="App__temp">
            <img src={weather.iconURL} alt="Weather icon"/>
            <p>{Math.round(weather.temp)}°{units==='metric'?'C':'F'}</p>
          </div>
          <p className="App__weather">{weather.main}</p>
        </div>
        <div className="App__right">
          <div className="App__date-and-time">
            <p className="App__date">{weather.date}</p>
            <p className="App__time">Local time: {weather.local_time}</p>
          </div>
          <div className="App__details-card">
            <div>
              <UilTemperatureHalf/>
              <p>Real feel:<span>{Math.round(weather.feels_like)}°</span></p>
            </div>
            <div>
              <UilTear/>
              <p>Humidity:<span>{weather.humidity}%</span></p>
            </div>
            <div>
              <UilWind/>
              <p>Wind:<span>{weather.speed} mph</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="App__details-row">
        <div>
          <UilSun/>
          <p>Sunrise:<span>{weather.sunrise_time}</span></p>
        </div>
        <div>
          <UilSunset/>
          <p>Sunset:<span>{weather.sunset_time}</span></p>
        </div>
        <div>
          <UilArrowUp/>
          <p>High:<span>{Math.round(weather.temp_max)}°</span></p>
        </div>
        <div>
          <UilArrowDown/>
          <p>Low:<span>{Math.round(weather.temp_min)}°</span></p>
        </div>
      </div>
    </div>
  );
};

export default MainWeather;