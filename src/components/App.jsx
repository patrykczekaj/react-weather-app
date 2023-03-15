import React, { useState } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

const App = () => {

  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className='App'>
      <Form value={value} change={handleInputChange}/>
      <Result />
    </div>
  );
};

export default App;
