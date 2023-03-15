import React, { useState } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

const App = () => {

  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [temp, setTemp] = useState('');
  const [pressure, setPressure] = useState('');
  const [wind, setWind] = useState('');
  const [err, setErr] = useState('');

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=ea5196d684737306b38c3fa85e8c9aad`

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleCitySubmit = (e) => {
    e.preventDefault();

    fetch(API)
    .then(response => {
      if (response.ok) {
        return response
      }
      throw Error('an error occured')
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

  }

  return (
    <div className='App'>
      <Form value={value} change={handleInputChange} submit={handleCitySubmit}/>
      <Result />
    </div>
  );
};

export default App;
