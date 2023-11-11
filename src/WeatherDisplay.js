import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

function WeatherDisplay({ data }) {
  let WeatherIcon;

  if (data.weather[0].main === 'Rain') {
    WeatherIcon = UmbrellaIcon; // Ícone para chuva
  } else {
    WeatherIcon = WbSunnyIcon; // Ícone padrão para tempo ensolarado
  }
  return (
    <Card className="weather-card">
      <Typography variant="h5">{data.name}</Typography>
      <WeatherIcon style={{ fontSize: '48px', color: '#ffc107' }} />
      <Typography variant="body1">Temperatura: {data.main.temp} °C</Typography>
      <Typography variant="body1">Umidade: {data.main.humidity}%</Typography>
      <Typography variant="body1">Descrição: {data.weather[0].description}</Typography>
    </Card>
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
        main: PropTypes.string,
        description: PropTypes.string
      }))
    })
  };

export default WeatherDisplay;
