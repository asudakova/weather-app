import React from 'react';
import './styles/reset.css'
import './styles/styles.scss'
import Header from "./components/Header";
import MainWeather from "./components/MainWeather";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Header/>
        <MainWeather/>
        <Forecast/>
      </div>
    </div>
  );
}

export default App;
