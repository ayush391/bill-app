import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCab } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-bg">
                <div className="container">
                    <a className="navbar-brand text-danger" href="/"><FontAwesomeIcon icon={faCab} color="white"></FontAwesomeIcon> Carwash Bills</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link text-white me-5 active" aria-current="page" href="/">Home</a>
                            <a className="nav-link text-white me-5" href="/">Products</a>
                            <a className="nav-link text-white me-5" href="/">About</a>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar