import React, { useState } from "react";
import Weather from "./weather";
import "./index.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    const apiKey = "a46fc776ad3f176de2c244260ea2c7fc"; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        setWeatherData(null);
        alert("City not found");
      }
    } catch (error) {
      alert("Error fetching weather data");
    }
  };

  return (
    <div className="app">
      <h1>Andy's Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;