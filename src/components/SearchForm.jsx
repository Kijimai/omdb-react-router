import React from "react"
import { useGlobalContext } from "../context"
const SearchForm = () => {
  const { query, setQuery, error, handleSearch } = useGlobalContext()

  return (
    <div className="search-container">
      <form className="search-form">
        <h2>Search for a movie</h2>
        <input
          type="text"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchForm
