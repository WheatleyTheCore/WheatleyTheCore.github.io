import React from "react";

const SearchBar = (props) => {
  return (
    <form action={`/${props.path}`} method="get">
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
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
