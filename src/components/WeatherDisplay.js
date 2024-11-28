import React from "react";
import styled from "styled-components";

const WeatherInfo = styled.div`
  font-size: 1.4em;
  margin-bottom: 10px;
`;

const WeatherDisplay = ({ weather }) => {
  const { main, weather: details, name } = weather;
  const temperature = (main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
  const iconUrl = `http://openweathermap.org/img/wn/${details[0].icon}@2x.png`;
  
  return (
    <div>
      <WeatherInfo>
        <h2>{name}</h2>
        <p>Temperature: {temperature}°C</p>
        <p>Condition: {details[0].description}</p>
      </WeatherInfo>
      <img src={iconUrl} alt={details[0].description} />
    </div>
  );
};

export default WeatherDisplay;
