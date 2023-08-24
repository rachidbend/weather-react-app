import { HistoryCity } from './HistoryCity';

/* eslint-disable react/prop-types */

import closeIcon from '../src/assets/icon-close.svg';
import searchIcon from '../src/assets/icon-search.svg';

export function SearchPanel({
  toggleClassName = '',
  onToggleSearch,
  onQueryChange,
  query,
  onSearch,
  searchHistory,
  onHistoryClick,
}) {
  return (
    <div className={`search ${toggleClassName}`}>
      <div className="search--btn-container">
        <button
          onClick={() => onToggleSearch(false)}
          className="btn btn--close-search"
        >
          <img className="btn--close-search-icon" src={closeIcon} alt="close" />
        </button>
      </div>
      <div className="input-search--container">
        <input
          id="input-search"
          type="text"
          onChange={onQueryChange}
          value={query}
          placeholder="search location"
        />
        <label className="input-search--label" htmlFor="input-search">
          <img src={searchIcon} alt="search" />{' '}
        </label>
        <button className="btn btn--search" onClick={onSearch}>
          Search
        </button>
      </div>
      <div className="search--history">
        {searchHistory.map(city => (
          <HistoryCity
            key={Date.now + city}
            cityName={city}
            onHistoryClick={onHistoryClick}
          />
        ))}
        {/* <HistoryCity cityName={'London'} />
        <HistoryCity cityName={'Baecelona'} />
        <HistoryCity cityName={'Long Beach'} /> */}
      </div>
    </div>
  );
}
