import React, { useState, useEffect } from "react"
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: "" })
  const [data, setData] = useState(null)

  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const res = await fetch(url)
      const data = await res.json()
      if (data.Response === "True") {
        setData(data.Search || data) //multiple / single search purpose (arrayed or not)
        setError({ show: false, msg: "" })
      } else {
        setError({ show: true, msg: data.Error })
      }
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams])

  return { isLoading, error, data }
}

export default useFetch
