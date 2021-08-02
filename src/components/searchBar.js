import React from "react";

const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <form className="searchForm" action={`/${props.path}`} method="get">
        <label htmlFor="search-bar">
          <span className="hidden">Search through posts</span>
        </label>
        <input
          value={props.searchQuery}
          onInput={(input) => props.setSearchQuery(input.target.value)}
          type="text"
          id="search-bar"
          placeholder="Search posts"
          name="s"
          className="searchField"
        />
        <button type="submit" className="fauxButton submitButton">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
