import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Firebase'

export const Navbar = () => {

   const currentuser = useAuth()



  return (

    <>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">BlogBob</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Bloggers">Bloggers</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Bloglist">Blogs</Link>
        </li>

        <li className="nav-item">
        {currentuser&&<p>{currentuser.email}</p>}
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
    
    
    </>
  )
}
