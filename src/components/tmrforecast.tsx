import React, { FC } from 'react';
import WeatherIcon from './weatherIcon';

interface TomorrowForecastProps {
  forecastData: any[]; // Forecast data for tomorrow
}

const TomorrowForecast: FC<TomorrowForecastProps> = ({ forecastData }) => {
  // Get the first 6 entries from forecastData
  const tomorrowForecast = forecastData.slice(0, 6);

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md m-10">
      <h3 className="text-gray-800 font-medium mb-2">Tomorrow's Forecast</h3>
      <div className='flex flex-col-6 justify-between item-center text-center'>
      {tomorrowForecast.map((data, index) => (
        <div key={index} className="mb-2">
          <p>{new Date(data.dt * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</p>          
          
          
          <WeatherIcon weatherType={data.weather[0].description} />
      
      
          <p>{data.weather[0].description}</p>
          <p>{Math.round(data.main.temp - 273.15)}°C</p>
        </div>
      ))}

      </div>
      
    </div>
  );
};

export default TomorrowForecast;