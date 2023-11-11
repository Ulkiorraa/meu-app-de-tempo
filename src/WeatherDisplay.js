import React from 'react';
import PropTypes from 'prop-types';

function WeatherDisplay({ data }) {
  return (
    <div className="weather-card">
      <h5>{data.name}</h5>
      <p>Temperatura: {data.main.temp} °C</p>
      <p>Umidade: {data.main.humidity}%</p>
      <p>Descrição: {data.weather[0].description}</p>
    </div>
  );
}

WeatherDisplay.propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      main: PropTypes.shape({
        temp: PropTypes.number,
        humidity: PropTypes.number
      }),
      weather: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string
      }))
    })
  };

export default WeatherDisplay;
