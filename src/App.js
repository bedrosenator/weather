import React from 'react';
import Header from 'components/Header';
import './App.css';
import Forecast from 'containers/Forecast';
import ForecastBackground from 'containers/ForecastBackground';

function App() {
  return (
    <div className="App">
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
