import { SearchCity } from './SearchCity';

/* eslint-disable react/prop-types */
export function SearchPanel({
  toggleClassName = '',
  onToggleSearch,
  onQueryChange,
  query,
  onSearch,
}) {
  return (
    <div className={`search ${toggleClassName}`}>
      <div className="search--btn-container">
        <button
          onClick={() => onToggleSearch(false)}
          className="btn btn--close-search"
        >
          X
        </button>
      </div>
      <div className="input-search--container">
        <input
          id="input-search"
          type="text"
          onChange={onQueryChange}
          value={query}
        />
        <label htmlFor="input-search">glass</label>
        <button className="btn btn--search" onClick={onSearch}>
          Search
        </button>
      </div>
      <div className="search--reseults">
        <SearchCity cityName={'London'} />
        <SearchCity cityName={'Baecelona'} />
        <SearchCity cityName={'Long Beach'} />
      </div>
    </div>
  );
}
