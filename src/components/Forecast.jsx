import React from 'react';

const Forecast = ({weather}) => {
  return (
    <div className="App__forecast">
      <h2>Forecast</h2>
      <div className="App__forecast-info">
        {weather.map(item => (
          <div key={item.forecast_time}>
            <p>{item.forecast_time}</p>
            <img src={item.forecast_ico} alt="Weather icon"/>
            <p>{Math.round(item.forecast_temp)}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;