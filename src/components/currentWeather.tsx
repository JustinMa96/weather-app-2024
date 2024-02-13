import React, { FC } from 'react';
import WeatherIcon from './weatherIcon';

interface WeatherInfoProps {
  city: string;
  country: string;
  currentTime: string;
  temp: number;
  weather: string;
  feelsLike: number;
  speed: number; // Wind speed in meters per second
  
}

const CurrentWeatherInfo: FC<WeatherInfoProps> = ({ city, country, currentTime, temp, weather,feelsLike,speed }) => {
  // Convert Fahrenheit to Celsius
  const temperatureCelsius = temp - 273.15;
  const celsiusFeelsLike = Math.round(feelsLike - 273.15);
  const kmPerHour = Math.round(speed * 3.6);

  return (
    <div className="flex justify-between bg-gray-200 p-4 rounded-md shadow-md mx-10">
      <div>
        <h1 className="text-2xl text-gray-800 font-bold">{city}</h1>
        <h3 className="text-lg text-gray-800 ">{country}</h3>
        <p className="text-sm text-gray-800 ">{currentTime}</p>
      </div>
      <div>
        <h3 className="text-gray-800 font-medium mb-2">Feels Like</h3>
        <h3 className="text-gray-800">{celsiusFeelsLike}°C</h3>
      </div>
      <div>
        <h3 className="text-gray-800 font-medium mb-2">Wind Speed</h3>
        <h3 className="text-gray-800">{kmPerHour} km/h</h3>
      </div>
      <div>
        <WeatherIcon weatherType={weather} />
        <p className="text-lg text-gray-800 ">{weather}</p>
      </div>
      <div>
        <h1 className="text-2xl text-gray-800 font-bold ">{`${temperatureCelsius.toFixed(1)}°C`}</h1>
        
      </div>
    </div>
    
  );
};

export default CurrentWeatherInfo;