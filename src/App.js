import React, {useState} from 'react';
import Header from './components/Header';
import './App.css';
import Input from './components/Input';

function App() {
  // const [ city, setCity ] = useState('');
  const city = '';
  const handleChangeLocation = (e) => {
    console.log(e);
  };
  return (
    <div className="App">
      <Header />
      <section>
        <Input text={city} onChange={handleChangeLocation} />
      </section>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
