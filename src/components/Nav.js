import React from 'react'
import '../styles/styles.css'
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
<nav class="navbar navbar-expand-md bg-body-tertiary">
  <div class="container-fluid">
    
  <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link active fs-2" aria-current="page" href='/'>Learn A New Language: German</a>
        </li>
      </ul>
    </div>

    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <Link to="/flashcardweb" class="nav-link active" aria-current="page">Home</Link>
        </li>
        
        <li class="nav-item">
          <Link to="/flashcardweb/about" class="nav-link active" aria-current="page">About</Link>
        </li>
        
      </ul>
    </div>
  </div>

  <div className="mobileNav">
    <h3>Learn a new language: German</h3>
    <ul className="navLinks">
        <li class="nav-item">
          <Link to="/flashcardweb" class="nav-link active" aria-current="page">Home</Link>
        </li>
        
        <li class="nav-item">
          <Link to="/flashcardweb/about" class="nav-link active" aria-current="page">About</Link>
        </li>
        
      </ul>

  </div>
</nav>

    </>
  )
}

export default Nav;
