import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <div className="white-background">
  <header>
    <nav class="navbar navbar-expand-lg navbar-light d-flex align-items-center container">
      <Link class="navbar-brand" to="">
        <h1 className="lato yellow">
        munn.
        </h1>
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link yellowHover lato" to="">Home <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link yellowHover lato" to="">Servicies</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link yellowHover lato" to="">About Us</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link yellowHover lato" to="">Contact</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link yellowHover lato" to="">Blog</Link>
          </li>          
        </ul>
      </div>
    </nav>
  </header>
  </div>
)



export default Header
