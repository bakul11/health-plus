import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../Firebase/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { faDotCircle, faPlus, faShoppingCart, faUser, faUserDoctor, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import './DashBorad.css'
import useAdmin from '../../Hooks/useAdmin'




const DashBoard = () => {

    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)

    return (
        <div className='dashboard'>
            <div className="row">
                <div className="col-lg-3">
                    <ul className='mt-5'>
                        <li className="nav-item">
                            <NavLink className="nav-link ms-5 text-dark" aria-current="page" to="/dashboard/myservices"><FontAwesomeIcon icon={ faUserDoctor } className='me-2'></FontAwesomeIcon>My Services</NavLink>
                        </li>
                        <li className="nav-item">
                            {
                                admin && <NavLink className="nav-link ms-5 text-dark" aria-current="page" to="/dashboard/addservices"><FontAwesomeIcon icon={ faPlus } className='me-2'></FontAwesomeIcon>Add Services</NavLink>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                admin && <NavLink className="nav-link ms-5 text-dark" aria-current="page" to="/dashboard/admin"> <FontAwesomeIcon icon={ faUserDoctor } className='me-2'></FontAwesomeIcon> Admin</NavLink>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                admin && <NavLink className="nav-link ms-5 text-dark" aria-current="page" to="/dashboard/allbooking"> <FontAwesomeIcon icon={ faUserGroup } className='me-2'></FontAwesomeIcon>Booking Services</NavLink>
                            }
                        </li>
                    </ul>
                </div>
                <div className="col-lg-9 pb-5" style={ { background: '#e9e9e9' } }>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;