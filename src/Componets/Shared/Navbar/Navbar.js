import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow-lg">
            <div className="container">
                <Link className="navbar-brand text-light fs-2" to="/">Health Plus</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-light active ms-5" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light ms-5" aria-current="page" to="/about">About us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light ms-5" aria-current="page" to="/appointment">Appointment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light ms-5" aria-current="page" to="/booking">Booking</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light ms-5" aria-current="page" to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;