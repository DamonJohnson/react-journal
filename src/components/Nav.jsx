import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
       Journal
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-item nav-link active" to="/">
            Home
          </Link>
          <Link class="nav-item nav-link" to="/category">
            Select Category
          </Link>
          <Link class="nav-item nav-link" to="/entry/new">
            New Entry
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
