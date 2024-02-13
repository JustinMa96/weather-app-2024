import React, { FC } from 'react';
import WeatherIcon from './weatherIcon';

interface FiveDayForecastProps {
  forecastData: {
    main: {
      temp: number;
    };
    weather: {
      main: string;
      description: string;
    }[];
    wind: {
      speed: number;
    };
    dt_txt: string;
  }[];
}

const FiveDayForecast: FC<FiveDayForecastProps> = ({ forecastData }) => {
    console.log(forecastData)

    const filteredForecastData = forecastData.filter((_, index) => index % 8 === 0);

  const formatDate = (dateString: string) => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US');
  };

  return (
    <div className="m-7">
      { filteredForecastData.map((data, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-md shadow-md text-center m-4 flex flex-col-5 justify-between">
          <p>{formatDate(data.dt_txt)}</p>
          <p>{Math.round(data.main.temp - 273.15)}°C</p>
          <p>{data.weather[0].main}</p>
          <div>
            <WeatherIcon weatherType={data.weather[0].description} />
            <p>{data.weather[0].description}</p>
          </div>
         
          <p>{Math.round(data.wind.speed * 3.6)} Km/h</p>
        </div>
      ))}
    </div>
  );
};

export default FiveDayForecast;
