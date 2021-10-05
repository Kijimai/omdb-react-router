import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { imgNotFound as placeholderImg } from "./Movies"
import useFetch from "../useFetch"

const SingleMovie = () => {
  const { id } = useParams()
  const { isLoading, error, data: movie } = useFetch(`&&i=${id}`) //taken from the useParams parameter

  if (isLoading) {
    return <div className="loading">...Loading movie info</div>
  }

  if (error.show) {
    return (
      <div>
        <h1>{error.msg}</h1>
        <h2>Error Message Here!!!!</h2>
        <Link to="/" className="" />
      </div>
    )
  }

  //deconstruct retrieved data
  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Genre: genre,
    Actors: actors,
    Language: language,
    Runtime: runtime,
    imdbRating: rating,
    Director: director,
    Writer: writer,
  } = movie

  return (
    <main class="single-main">
      <section className="single-movie">
        <img src={poster === "N/A" ? placeholderImg : poster} alt={title} />
        <div className="movie-infos-container">
          <div className="movie-header">
            <h1 className="title">{title}</h1>
            <h2 className="year">{year}</h2>
            <h3>Directed by: {director}</h3>
            <h3>Written by: {writer}</h3>
            <h3>{genre}</h3>
          </div>
          <div className="movie-info">
            <p className="plot">{plot}</p>
            <div className="sub-info">
              <p>
                Starring: <span>{actors}</span>
              </p>
              <p>
                Language: <span>{language}</span>
              </p>
              <p>
                Runtime: <span>{runtime}</span>
              </p>
              <p>
                Rating: <span>{rating}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Link to="/" className="link-btn">
        Back to Home
      </Link>
    </main>
  )
}

export default SingleMovie
