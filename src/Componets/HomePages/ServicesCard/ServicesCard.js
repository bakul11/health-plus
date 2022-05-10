import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ServicesCard = ({ service }) => {
    const { serviceName, servicesIcon, discription } = service;
    return (
        <div className='col-lg-4 col-md-6 text-center'>
            <div className="card shadow-lg">
                <FontAwesomeIcon icon={ servicesIcon } className='pt-3' size='3x' style={ { color: '#d1517a' } }></FontAwesomeIcon>
                <div className="card-body">
                    <h3 className='text-capitalize fs-5 mb-3'>{ serviceName }</h3>
                    <p>{ discription }</p>
                    <button className="btn btn-primary mt-2">Read More<FontAwesomeIcon icon={ faAngleDoubleRight } className='ms-2'></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;