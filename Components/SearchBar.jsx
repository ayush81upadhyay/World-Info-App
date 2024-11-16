import React from 'react'

const SearchBar = ({Setquery}) => {
  return (
    <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input 
          type="text" 
          placeholder='Search for a country...'
          onChange={event => Setquery(event.target.value.toLowerCase())}
          ></input>
    </div>
  )
}

export default SearchBar;
