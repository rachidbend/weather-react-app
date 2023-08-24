import { WeatherIcon } from './WeatherIcon';
import formatDate from './formatDate';

export function ForcastOfDay({ dayDate, maxTemp, minTemp, weather }) {
  return (
    <div className="day-forcast">
      <p className="day-forcast--date"> {formatDate(dayDate)} </p>
      <div className="day-forcast--weather">
        <WeatherIcon weather={weather} />
      </div>
      <div className="day-forcast--max-min">
        <p className="day-forcast--max">{maxTemp} </p>
        <p className="day-forcast--min">{minTemp}</p>
      </div>
    </div>
  );
}
