import React from 'react';
import Header from 'components/Header';
import Forecast from 'containers/Forecast';
import ForecastBackground from 'containers/ForecastBackground';
import './App.scss';

function App() {
  return (
    <div className="app">
      <ForecastBackground>
        <Header />
        <section>
          <Forecast />
        </section>
      </ForecastBackground>
    </div>
  );
}

export default App;
