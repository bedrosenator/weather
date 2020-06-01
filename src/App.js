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
      <footer>Footer</footer>
    </div>
  );
}

export default App;
