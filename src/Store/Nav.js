import React from 'react'
import { useSelector } from 'react-redux';

function Nav() {
    const language = useSelector(state => state.lang)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="https://www.google.com/?hl=ar">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://www.google.com/?hl=ar">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="https://www.google.com/?hl=ar">Features</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="https://www.google.com/?hl=ar">Pricing</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="https://www.google.com/?hl=ar">THE LANGUAGE IS : {language}</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  
  )
}

export default Nav