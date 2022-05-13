import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import ErrorLogo from '../.././images/401.jpg'
import Zoom from 'react-reveal/Zoom';

const NoMatch = () => {
    return (
        <div className='container mt-2 mb-5'>
            <div className="row">
                <Zoom>
                    <div className="col-lg-9 mx-auto text-center">
                        <img src={ ErrorLogo } alt='logo' className='img-fluid'></img>
                        <h3>Page not Found</h3>
                        <Link to='/' className='btn btn-danger mt-3'>HomePages <FontAwesomeIcon icon={ faAnglesRight } className='ms-2'></FontAwesomeIcon></Link>
                    </div>
                </Zoom>
            </div>
        </div >
    );
};

export default NoMatch;