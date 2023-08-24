/* eslint-disable react/prop-types */

import arrowNextIcon from './assets/icon-arrow-next.svg';

export function HistoryCity({ cityName, onHistoryClick }) {
  const nameArray = cityName?.split('').at(0).toUpperCase();
  const fullName = `${nameArray}${cityName?.split('').splice(1).join('')}`;

  return (
    <div className="search--city" onClick={() => onHistoryClick(cityName)}>
      <p>{fullName}</p>
      <img
        src={arrowNextIcon}
        alt={`go to ${cityName}`}
        className="search--city-arrow"
      ></img>
    </div>
  );
}
