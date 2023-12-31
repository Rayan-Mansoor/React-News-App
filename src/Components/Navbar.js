import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">News App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <Link className="nav-link" to="React-News-App/">Home</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link" to="React-News-App/Sports">Sports</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link" to="React-News-App/Technology">Technology</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link" to="React-News-App/Science">Science</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link" to="React-News-App/Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link" to="React-News-App/Business">Business</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link" to="React-News-App/Health">Health</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    )
  }
}
