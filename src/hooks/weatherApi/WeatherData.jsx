import { useEffect, useState } from "react";

const useWeatherData = (locationName) => {
  const [weatherApi, setWeatherApi] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const weatherURL = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${locationName}`;

  const getWeatherData = async () => {
    try {
      setError(null);
      const response = await fetch(weatherURL);
      const data = await response.json();
      if (data.error) {
        setError(data.error.message);
        setWeatherApi(null);
      } else {
        setWeatherApi(data);
      }
    } catch {
      setError("Something went wrong.");
      setWeatherApi(null);
    }
  };

  useEffect(() => {
    if (locationName) {
      getWeatherData();
    }
  }, [locationName]);

  return { weatherApi, error, loading };
};

export default useWeatherData;
