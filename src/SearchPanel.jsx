import { SearchCity } from './SearchCity';

/* eslint-disable react/prop-types */
export function SearchPanel({ toggleClassName = '', onToggleSearch }) {
  return (
    <div
      style={{ backgroundColor: 'blue' }}
      className={`search ${toggleClassName}`}
    >
      <button
        onClick={() => onToggleSearch(false)}
        className="btn btn--close-search"
      >
        X
      </button>
      <div className="input-search--container">
        <input id="input-search" type="text" />{' '}
        <label htmlFor="input-search">glass</label>
        <button className="btn btn--search">Search</button>
      </div>
      <div className="search--reseults">
        <SearchCity cityName={'London'} />
        <SearchCity cityName={'Baecelona'} />
        <SearchCity cityName={'Long Beach'} />
      </div>
    </div>
  );
}
