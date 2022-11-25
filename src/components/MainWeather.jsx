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

const MainWeather = () => {
  return (
    <div className="App__main">
      <div className="App__info">
        <div className="App__left">
          <h1 className="App__title">New York, US</h1>
          <div className="App__temp">
            <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="Weather icon"/>
            <p>5°</p>
          </div>
          <p className="App__weather">Overcast clouds</p>
        </div>
        <div className="App__right">
          <div className="App__date-and-time">
            <p className="App__date">Wednesday, 23 November</p>
            <p className="App__time">Local time: 6:30 PM</p>
          </div>
          <div className="App__details-card">
            <div>
              <UilTemperatureHalf/>
              <p>Real feel:<span>3°</span></p>
            </div>
            <div>
              <UilTear/>
              <p>Humidity:<span>60%</span></p>
            </div>
            <div>
              <UilWind/>
              <p>Wind:<span>2 mph</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="App__details-row">
        <div>
          <UilSun/>
          <p>Sunrise:<span>6:20 AM</span></p>
        </div>
        <div>
          <UilSunset/>
          <p>Sunset:<span>8:45 PM</span></p>
        </div>
        <div>
          <UilArrowUp/>
          <p>High:<span>7°</span></p>
        </div>
        <div>
          <UilArrowDown/>
          <p>Low:<span>4°</span></p>
        </div>
      </div>
    </div>
  );
};

export default MainWeather;