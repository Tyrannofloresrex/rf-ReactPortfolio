import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" id="logo-name" href="/">
                Welcome
            </a>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon navbar-dark"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="about">
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="portfolio">
                            Gallery
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact">
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/Tyrannofloresrex" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/rex-flores-4958a8203/"
                            target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./assets/rexfloresresume.pdf" rel="noreferrer" download>
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;