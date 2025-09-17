import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="p-6 rounded-2xl shadow-lg text-center w-80 mb-6 bg-white text-black">
      <h2 className="text-xl font-bold">{weather.name}, {weather.country}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt="weather-icon"
        className="mx-auto"
      />
      <p className="text-2xl font-bold">{weather.temperature}°C</p>
      <p>Feels like: {weather.feels_like}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p className="font-semibold">{weather.condition}</p>
    </div>
  );
};

export default WeatherCard;

