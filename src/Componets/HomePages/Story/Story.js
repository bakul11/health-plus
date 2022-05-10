import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import slide1 from '../../../images/doctor/doc.png';

const Story = () => {
    return (
        <div className='container' style={ { paddingTop: '100px' } }>
            <div className="row gy-5">
                <div className="col-lg-6">
                    <div className="slide-logo">
                        <img src={ slide1 } alt="logo" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="slide-title">
                        <p>we are here for your care</p>
                        <h3 className='mt-2 mb-2 fs-1'>Why you choose us ?</h3>
                        <p>Doctors Services Group is your complete solution for managing patient education, communications, and billing for uninsured services soluta expedita et ex. Odio quod debitis ipsam magnam quidem animi maiores</p>
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore quis deleniti ab culpa! Consequatur quas ratione ipsum nulla ad, quisquam quam molestiae impedit minima rem asperiores aspernatur consectetur pariatur sed dicta magnam repudiandae neque id atque minus molestias sapiente.</p>
                        <button className="btn btn-primary mt-2 p-2">Get Appointment <FontAwesomeIcon icon={ faAngleDoubleRight } className='ms-2'></FontAwesomeIcon></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Story;