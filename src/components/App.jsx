import React, { useState } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

const APIKey = 'ea5196d684737306b38c3fa85e8c9aad';

const App = () => {

  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [temp, setTemp] = useState('');
  const [pressure, setPressure] = useState('');
  const [wind, setWind] = useState('');
  const [error, setError] = useState('');

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APIKey}&units=metric`;

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
    .then(data => {
        const time = new Date().toLocaleString();

        setError(false);
        setDate(time);
        setSunrise(data.sys.sunrise);
        setSunset(data.sys.sunset);
        setTemp(data.main.temp);
        setPressure(data.main.pressure);
        setWind(data.wind.speed);
        setCity(value);
    })
    .catch(err => {
        setError(true);
        setCity(value);
    })

  }

  return (
    <div className='App'>
      <Form value={value} change={handleInputChange} submit={handleCitySubmit}/>
      <Result weather={{error, date, sunrise, sunset, temp, pressure, wind, city}}/>
    </div>
  );
};

export default App;
