import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Patient from '../../.././images/doctor/patient.png'
import Footer from '../../Shared/Footer/Footer';

const ServicesDetails = () => {
    const { name, discription, icon } = useParams();

    const navigate = useNavigate();
    const handleGetAppointment = () => {
        navigate('/appointment');
    }

    return (
        <section className='service mt-5'>
            <div className='container'>
                <div className='row gy-5'>
                    <div className="col-lg-7">
                        <div className="logo">
                            <img src={ Patient } alt='Patient Logo'></img>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="logo mt-5">
                            <h2>{ name }</h2>
                            <p>{ discription }</p>
                            <button className="btn btn-danger mt-2" onClick={ handleGetAppointment }>Book Appointment<FontAwesomeIcon icon={ faAngleDoubleRight } className='ms-2'></FontAwesomeIcon></button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default ServicesDetails;