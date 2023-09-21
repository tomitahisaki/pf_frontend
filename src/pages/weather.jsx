import { useState, useEffect } from "react";

export default function Weather() {
  const [weather, setWeather] = useState("");
  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch("/api/weather");
      const data = await response.json();
      setWeather(data);
    };
    fetchWeather();
  }, []);

  return <div>{weather.weather && <p>東京の天気：{weather.weather[0].main}</p>}</div>;
}
