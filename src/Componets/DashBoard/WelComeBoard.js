import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Slide } from 'react-reveal';

const WelComeBoard = () => {
    return (
        <div className='container mt-5 mb-5 text-center' style={ { paddingBottom: '400px' } }>
            <Slide right>
                <FontAwesomeIcon icon={ faUserDoctor } className='me-2 fs-1 mb-2'></FontAwesomeIcon>
                <h3>Welcome to Your DashBoard</h3>
            </Slide>
        </div>
    );
};

export default WelComeBoard;