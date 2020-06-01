import React from 'react';
import Header from './components/Header';
import './App.css';
import Forecast from './containers/Forecast';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Forecast />
      </section>
    </div>
  );
}

export default App;
