import React from 'react'
import '../styles/styles.css'

function Nav() {
  return (
    <>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
  <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link active fs-2" aria-current="page" href="#">Learn A New Language: German</a>
        </li>
      </ul>
    </div>

    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">German</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Nav;
