import React from "react"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="error-page">
      Page not found!
      <Link to="/" className="">
        Go back Home
      </Link>
    </div>
  )
}

export default Error
