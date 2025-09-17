const apiKey = import.meta.env.VITE_WEATHER_API;

export const fetchWeatherByCity = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  if (!res.ok) throw new Error("City not found!");
  const data = await res.json();
  return data;
};

export const fetchForecastByCity = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
  );
  if (!res.ok) throw new Error("Forecast not found!");
  const data = await res.json();
  return data;
};
