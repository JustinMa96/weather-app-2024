import React, { FC } from 'react';
import Image from 'next/image';

import clearSkyIcon from '@/icon/clear sky.png';
import fewCloudsIcon from '@/icon/few clouds.png';
import scatteredCloudsIcon from '@/icon/scattered clouds.png';
import brokenCloudsIcon from '@/icon/broken clouds.png';
import showerRainIcon from '@/icon/shower rain.png';
import rainIcon from '@/icon/rain.png';
import thunderstormIcon from '@/icon/thunderstorm.png';
import snowIcon from '@/icon/snow.png';
import mistIcon from '@/icon/mist.png';

interface WeatherIconProps {
  weatherType: string;
}

const WeatherIcon: FC<WeatherIconProps> = ({ weatherType }) => {
    
  const getIconPath = (weatherType: string) => {
    switch (weatherType) {
      case 'clear sky':
        return clearSkyIcon;
      case 'few clouds':
        return fewCloudsIcon;
      case 'scattered clouds':
        return scatteredCloudsIcon;
      case 'broken clouds':
        return brokenCloudsIcon;
      case 'overcast clouds':
        return brokenCloudsIcon;
      case 'shower rain':
        return showerRainIcon;
      case 'rain':
        return rainIcon;
      case 'thunderstorm':
        return thunderstormIcon;
      case 'snow':
        return snowIcon;
      case 'mist':
        return mistIcon;
      default:
        return snowIcon;
    }
  };
  

  return <Image src={getIconPath(weatherType)} alt={weatherType} height={80} width={80} />;
};

export default WeatherIcon;
