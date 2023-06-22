import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand fw-bolder" to="/">News</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/business">Business</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
                        </li>              
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/health">Health</NavLink>
                        </li>                    
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/science">Science</NavLink>
                        </li>                    
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/sports">Sports</NavLink>
                        </li>                    
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/technology">Technology</NavLink>
                        </li>              
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">SignUp</NavLink>
                        </li>                                     
                    </ul>
                </div>
            </div>
            </nav>
      </div>
  )
}
