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
          <article className="movie-container">
            <Link to={`/movies/${id}`} className="movie-link">
              <img src={poster === "N/A" ? imgNotFound : poster} alt={title} />
              <div className="movie-container-info">
                <h2>{title}</h2>
              </div>
            </Link>
          </article>
        )
      })}
    </section>
  )
}

export default Movies
