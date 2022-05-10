import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import slide1 from '../../../images/doctor/doctor.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className='makeAppointment'>
            <div className='container' style={ { paddingTop: '100px' } }>
                <div className="row gy-5">
                    <div className="col-lg-6">
                        <div className="make-logo" style={ { marginTop: '-120px' } }>
                            <img src={ slide1 } alt="logo" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="make-title">
                            <h3 className='mt-2 mb-2 fs-1 text-light'>Make an appointment <br /> today</h3>
                            <p className='text-light'>Doctors Services Group is your complete solution for managing patient education, communications, and billing for uninsured services soluta expedita et ex. Odio quod debitis ipsam magnam quidem animi maiores</p>
                            <button className="btn btn-primary mt-2 p-2">Get Appointment <FontAwesomeIcon icon={ faAngleDoubleRight } className='ms-2'></FontAwesomeIcon></button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;