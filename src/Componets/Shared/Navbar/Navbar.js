import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Navbar.css'
import auth from '../../Firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import swal from 'sweetalert';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    //Handle Logout Now 
    const handleLogOut = () => {
        navigate('/');
        signOut(auth);
        swal('Logout Done', 'your account logout success', 'success');
    }


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
                            <NavLink className="nav-link text-light ms-5" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light ms-5" aria-current="page" to="/appointment">Appointment</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light ms-5" aria-current="page" to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light ms-5" aria-current="page" to="/signup">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            {
                                user?.uid ? <button className='logout' onClick={ handleLogOut }>LogOut</button> : <NavLink className="nav-NavLink text-light d-block  ms-5" to="/login" style={ { marginTop: '9px' } }>Login</NavLink>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                user && <NavLink className="nav-link text-light ms-5" aria-current="page" to="/order">My Order</NavLink>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;