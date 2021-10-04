import React, { useState, useContext, useEffect } from "react"
import useFetch from "./useFetch"

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("demon")
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`)

  return (
    <AppContext.Provider
      value={{
        query,
        isLoading,
        error,
        movies,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
