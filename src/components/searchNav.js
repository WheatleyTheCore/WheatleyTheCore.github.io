import React from 'react'
import { Link } from 'gatsby'
import SearchBar from './searchBar'

const SearchNav = props => {
  return (
    <div className="searchNav">
      <div className="searchNavLinks">
        <Link to="/">Home</Link>
        <Link to={`/${props.linkTo}`}>{props.linkToText}</Link>
      </div>
      <div>
      <SearchBar
        path={props.path}
        searchQuery={props.searchQuery}
        setSearchQuery={props.setSearchQuery}
        /></div>

    </div>
  )
}

export default SearchNav
