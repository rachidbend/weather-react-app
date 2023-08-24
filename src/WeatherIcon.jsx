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
    return <img src={IconClear} alt="Clear sky" />;

  if (weather === 'hail') return <img src={IconHail} alt="Clear sky" />;

  if (weather === 'heavy cloud' || weather === 'overcast clouds')
    return <img src={IconHeavyCloud} alt="Clear sky" />;

  if (weather === 'heavy rain')
    return <img src={IconHeavyRain} alt="Clear sky" />;

  if (weather === 'light cloud' || weather === 'few clouds')
    return <img src={IconLightCloud} alt="Clear sky" />;

  if (weather === 'light rain')
    return <img src={IconLightRain} alt="Clear sky" />;

  if (weather === 'shower') return <img src={IconShower} alt="Clear sky" />;

  if (weather === 'sleet') return <img src={IconSleet} alt="Clear sky" />;

  if (weather === 'snow') return <img src={IconSnow} alt="Clear sky" />;

  if (weather === 'thunderstorm')
    return <img src={IconThunderstorm} alt="Clear sky" />;
}
