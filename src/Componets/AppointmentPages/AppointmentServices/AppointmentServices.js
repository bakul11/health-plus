import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import RubberBand from 'react-reveal/RubberBand';
import useServices from '../../../Hooks/useServices';
import loadLogo from '../../../images/lodingLogo.gif';

const AppointmentServices = ({ date }) => {
    const [services, setServices, loader] = useServices();
    const loadingMessage = <img src={ loadLogo } alt='loding' className='img-fluid d-block mx-auto' style={ { height: '100px', width: '100' } }></img>
    return (
        <div className='container mt-5'>
            <RubberBand>
                <h3 className='text-center fs-5 mb-5'>Avaiable Appointment On <span className='text-danger'>{ format(date, 'PP') }</span></h3>
            </RubberBand>

            <div className="row gy-5">
                {
                    services.map(services => <AppointmentCard services={ services } key={ services._id } date={ date }></AppointmentCard>)
                }

            </div>
            <div className='text-center mt-5'>
                { loader && loadingMessage }
            </div>
        </div>
    );
};

export default AppointmentServices;