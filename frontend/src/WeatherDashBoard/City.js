import React, { useState } from 'react';
import Data from './Data';
function City() {
  let [city, setcity] = useState('');
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    if (inputValue.trim() === ' ') {
    } else {
      setcity(inputValue);
    }
  };
  return (
    <div>
      <form onSubmit={handleChange}>
        <label>Enter the city: </label>
        <input
          type='text'
          required
          placeholder='Enter the City'
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button type='submit'>Submit </button>
        {/* <input type="text"> </input> */}
      </form>
      <Data value={city} />
    </div>
  );
}

export default City;
