import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalStyles from './components/GlobalStyles'; // Import the GlobalStyles
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city) return; // Don't make the request if the city is empty

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setWeatherData(null);
      setError('City not found or invalid API key.');
    }
  };

  return (
    <div>
      <GlobalStyles />
      <h1>Weather App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weatherData && (
        <div className="weather-container">
          <h2>{weatherData.name}</h2>
          <h3>{weatherData.weather[0].description}</h3>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
