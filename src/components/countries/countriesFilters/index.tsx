import React, { SyntheticEvent, memo } from "react";

const CountriesFilters = ({
  searchChange,
  selectRegion,
}: {
  searchChange: (newVal: SyntheticEvent) => void;
  selectRegion: (newVal: SyntheticEvent) => void;
}) => {
  return (
    <div
      className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 place-content-between"
      id="filter-content"
    >
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
            onChange={searchChange}
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="sm:place-self-end">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={selectRegion}
        >
          <option disabled>Filter by region</option>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="America">America</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default memo(CountriesFilters);
