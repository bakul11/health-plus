import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = (props) => {
    const { name, photo, country, dis } = props.testimonial;
    return (
        <div className='col-lg-4 col-md-12'>
            <div className="card team-section p-3">
                <p>{ dis }</p>
                <div className="card-body d-flex align-items-center">
                    <div className="card-thumbnail">
                        <img src={ photo } alt="" className="img-fluid" />
                    </div>
                    <div className="card-title mt-2 ms-2">
                        <h5 className='fs-6'>{ name }</h5>
                        <p>{ country }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;