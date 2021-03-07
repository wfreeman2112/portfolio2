import React from "react"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <span className="navbar-brand mb-1 h1">Wendi Freeman</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" href="/Contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/AboutMe">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/wfreeman2112">Github</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/wendi-freeman-87a3b71b2/">LinkedIn</a>
          </li>
        </ul>
      </nav>
    </nav>

    )

}

export default Navbar