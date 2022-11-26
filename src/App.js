import React, {useEffect, useState} from 'react';
import './styles/reset.css'
import './styles/styles.scss'
import Header from "./components/Header";
import MainWeather from "./components/MainWeather";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";

function App() {
  const [query, setQuery] = useState({q: "moscow"});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then(data => setWeather(data));
    };
    fetchWeather();
  }, [query, units])

  return (
    <div className="App">
      <div className="App__container">
        <Header
          setQuery={setQuery}
          units={units}
          setUnits={setUnits}
        />
        {weather &&
          <div>
            <MainWeather weather={weather} units={units}/>
            <Forecast weather={weather.list}/>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
