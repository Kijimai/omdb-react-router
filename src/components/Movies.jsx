import React from "react"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../context"
export const imgNotFound =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"

const Movies = () => {
  const { movies, isLoading } = useGlobalContext()

  if (isLoading) {
    return <div className="loading">...Loading</div>
  }

  return (
    <section class="movies">
      {movies.map((movie) => {
        console.log(movie)
        const { Poster: poster, Title: title, imdbID: id } = movie
        return (
          <Link to={`/movies/${id}`}>
            <div className="movie-container">
              <img src={poster} alt={title} />
            </div>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies
