import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Zoom from 'react-reveal/Zoom';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { serviceName, servicesIcon, discription } = service;

    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/serviceDetails/${serviceName}/${discription}`);
    }


    return (
        <div className='col-lg-4 col-md-6 text-center'>
            <Zoom>
                <div className="card shadow-lg">
                    <FontAwesomeIcon icon={ servicesIcon } className='pt-3' size='3x' style={ { color: '#d1517a' } }></FontAwesomeIcon>
                    <div className="card-body">
                        <h3 className='text-capitalize fs-5 mb-3'>{ serviceName }</h3>
                        <p>{ discription.length > 100 ? discription.slice(0, 130) : discription }</p>
                        <button className="btn btn-primary mt-2" onClick={ handleReadMore }>Get Services<FontAwesomeIcon icon={ faAngleDoubleRight } className='ms-2'></FontAwesomeIcon></button>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default ServicesCard;