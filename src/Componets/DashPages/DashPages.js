import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashPages = () => {
    return (
        <div className='container-fluid p-0'>
            <div className="row">
                <div className="col-lg-3">
                    <div className="slideMenu bg-dark" style={ { height: '700px' } }>
                        <ul>
                            <li className='bg-warning'>
                                <NavLink to='/dash' className='text-light p-3 d-block text-center'>Add Doctors</NavLink>
                            </li>
                            <li className='bg-success'>
                                <NavLink to='/dash/DoctorList' className='text-light p-3 d-block text-center'>Doctor List</NavLink>
                            </li>
                            <li className='bg-primary'>
                                <NavLink to='/dash/admin' className='text-light p-3 d-block text-center'>Admin Panel</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9 mt-5">
                    <div className="slideContaine">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashPages;