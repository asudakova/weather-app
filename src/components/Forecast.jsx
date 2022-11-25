import React from 'react';

const Forecast = () => {
  return (
    <div className="App__forecast">
      <h2>Forecast</h2>
      <div className="App__forecast-info">
        <div>
          <p>6 PM</p>
          <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="Weather icon"/>
          <p>5°</p>
        </div>
        <div>
          <p>9 PM</p>
          <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="Weather icon"/>
          <p>5°</p>
        </div>
        <div>
          <p>12 AM</p>
          <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="Weather icon"/>
          <p>5°</p>
        </div>
        <div>
          <p>3 AM</p>
          <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="Weather icon"/>
          <p>5°</p>
        </div>
        <div>
          <p>6 AM</p>
          <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="Weather icon"/>
          <p>5°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;