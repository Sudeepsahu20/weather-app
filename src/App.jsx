import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import ForecastCard from "./Components/ForecastCard";
import ToggleDarkMode from "./Components/ToggleDarkMode";
import { fetchWeatherByCity, fetchForecastByCity } from "./api/fetchWeather";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => setIsDark(prev => !prev);

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeatherByCity(city);
      setWeather({
        temperature: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        condition: data.weather[0].main,
        icon: data.weather[0].icon,
        name: data.name,
        country: data.sys.country,
      });

      const forecastData = await fetchForecastByCity(city);
      const dailyData = forecastData.list.filter(r => r.dt_txt.includes("12:00:00"));
      setForecast(dailyData);
    } catch (err) {
      alert(err.message);
    }
  };

  const getBackground = () => isDark ? "bg-gray-900 text-white" : "bg-blue-200";

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${getBackground()}`}>
      <ToggleDarkMode isDark={isDark} onToggle={handleToggle} />
      <Header />
      <SearchBar onSearch={handleSearch} />
      <WeatherCard weather={weather} />
      <ForecastCard forecast={forecast} />
    </div>
  );
};

export default App;
