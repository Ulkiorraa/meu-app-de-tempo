import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import ErrorBanner from './ErrorBanner';
import API_KEY from './config';
import './AppStyles.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) throw new Error('Falha na busca dos dados');
      const data = await response.json();
      setWeatherData(data);
      setError(false);
    } catch (err) {
      setError(true);
      setWeatherData(null);
    }
  };

  return (
    <div className="app-container">
      <h4>Aplicativo de Previsão do Tempo</h4>
      <SearchBar onSearch={fetchWeather} />
      {error && <ErrorBanner />}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default App;
