/* eslint-disable react/prop-types */
import IconClear from './assets/Clear.png';
import IconHail from './assets/Hail.png';
import IconHeavyCloud from './assets/HeavyCloud.png';
import IconHeavyRain from './assets/HeavyRain.png';
import IconLightCloud from './assets/LightCloud.png';
import IconLightRain from './assets/LightRain.png';
import IconShower from './assets/Shower.png';
import IconSleet from './assets/Sleet.png';
import IconSnow from './assets/Snow.png';
import IconThunderstorm from './assets/Thunderstorm.png';

export function WeatherIcon({ weather }) {
  if (weather === 'clear' || weather === 'clear sky')
    return <img src={IconClear} />;

  if (weather === 'hail') return <img src={IconHail} />;

  if (
    weather === 'heavy cloud' ||
    weather === 'overcast clouds' ||
    weather === 'broken clouds' ||
    weather === 'overcast clouds'
  )
    return <img src={IconHeavyCloud} />;

  if (weather === 'heavy rain') return <img src={IconHeavyRain} />;

  if (
    weather === 'light cloud' ||
    weather === 'few clouds' ||
    weather === 'scattered clouds'
  )
    return <img src={IconLightCloud} />;

  if (weather === 'light rain' || weather.includes('drizzle'))
    return <img src={IconLightRain} />;

  if (weather === 'shower') return <img src={IconShower} />;

  if (weather === 'sleet') return <img src={IconSleet} />;

  if (weather === 'snow') return <img src={IconSnow} />;

  if (weather.includes('thunderstorm')) return <img src={IconThunderstorm} />;
}
