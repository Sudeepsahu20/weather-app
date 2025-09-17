import React from "react";

const ForecastCard = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {forecast.map((day, idx) => (
        <div key={idx} className="p-4 rounded-xl shadow-md text-center bg-white text-black">
          <h3>{new Date(day.dt_txt).toLocaleDateString("en-US",{ weekday:"long" })}</h3>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt="forecast-icon"
            className="mx-auto"
          />
          <p className="font-bold">{day.main.temp}°C</p>
          <p>{day.weather[0].main}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
