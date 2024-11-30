import React from 'react';

function Data({ value }) {
  const cities = [
    {
      city: 'London',
      temperature: 15,
      condition: 'Cloudy',
      rainfall: '20mm',
      windSpeed: '10 km/h',
      humidity: '75%',
    },
    {
      city: 'New York',
      temperature: 22,
      condition: 'Sunny',
      rainfall: '0mm',
      windSpeed: '5 km/h',
      humidity: '60%',
    },
    {
      city: 'Tokyo',
      temperature: 18,
      condition: 'Rainy',
      rainfall: '50mm',
      windSpeed: '15 km/h',
      humidity: '85%',
    },
    {
      city: 'Sydney',
      temperature: 25,
      condition: 'Partly Cloudy',
      rainfall: '10mm',
      windSpeed: '8 km/h',
      humidity: '65%',
    },
    {
      city: 'Hyderabad',
      temperature: 30,
      condition: 'Sunny',
      rainfall: '0mm',
      windSpeed: '12 km/h',
      humidity: '55%',
    },
  ]; // Array of city names

  return (
    <div>
      {cities.map((c, index) => {
        if (c.city === value) {
          return (
            <div>
              <h1 key={index}>You have entered {value}</h1>
              <h2>temperature{c.temperature}</h2>
            </div>
          );
        }
        return null; // Return null if no match
      })}
    </div>
  );
}

export default Data;
