import React, { useState, KeyboardEvent } from 'react';
import axios from 'axios';
import CurrentWeatherInfo from '../components/currentWeather';
import TomorrowForecast from '@/components/tmrforecast';
import FiveDayForecast from '@/components/fivedaysForecast';

const Home: React.FC = () => {
  const [city, setCity] = useState('');
  const [currentWeatherData, setCurrentWeatherData] = useState<any>(null);
  const [forecastWeatherData, setForecastWeatherData] = useState<any>(null);
  const [showInstructions, setShowInstructions] = useState(true);
  const [errorCity, setErrorCity] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_API as string;

  const fetchWeather = async () => {
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    try {
      const currentResponse = await axios.get(currentUrl);
      const forecastResponse = await axios.get(forecastUrl);
      setCurrentWeatherData(currentResponse.data);
      setForecastWeatherData(forecastResponse.data);
      setShowInstructions(false);
      setErrorCity(false);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setErrorCity(true);
    }
  };

  

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
      <header className="w-full bg-blue-500 text-white py-4 flex items-center justify-between px-4">
        <h1 className="text-2xl font-semibold">Weather Forecast</h1>
        <div className="flex items-center">
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter city"
            style={{ color: 'black' }}
          />
          <button
            onClick={fetchWeather}
            className="ml-2 px-4 py-2 bg-white text-blue-500 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Search
          </button>
        </div>
      </header>
      <main className="w-full mt-8 flex-col">
        {showInstructions && (
          <div className="text-center mb-8">
            <h1 className="font-semibold mb-2">Location Weather Forecast Here!</h1>
            {errorCity && <h2 className="font-semibold mb-2">The city name seems incorrect. Please re-enter and check the capitalization of each letter.</h2>}
            <h2>1. Enter A City Name</h2>
            <h2>2. Get the City's Current Weather and Next 7 days Forecast</h2>
          </div>
        )}
        {currentWeatherData && (
          <div>
            <CurrentWeatherInfo
              city={currentWeatherData.name}
              country={currentWeatherData.sys.country}
              currentTime={new Date(currentWeatherData.dt * 1000).toLocaleTimeString()}
              temp={currentWeatherData.main.temp}
              weather={currentWeatherData.weather[0].description}
              feelsLike={currentWeatherData.main.feels_like}
              speed={currentWeatherData.wind.speed}
            />
            
          </div>
        )}
        {forecastWeatherData && (
          <TomorrowForecast forecastData={forecastWeatherData.list} />
        )}
         {forecastWeatherData && forecastWeatherData.list.length > 0 && <FiveDayForecast forecastData={forecastWeatherData.list} />}
      </main>
      <footer className="w-full bg-gray-500 text-white py-4 px-4 text-center">
        <h1 className="text-xl font-semibold">Create By Justin Ma</h1>
        <h3 className="text-sm">&copy; 2024</h3>
      </footer>
    </div>
  );
};

export default Home;