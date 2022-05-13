import React from 'react';
import './TestimonialCard.css'
import Zoom from 'react-reveal/Zoom';

const TestimonialCard = (props) => {
    const { name, photo, country, dis } = props.testimonial;
    return (
        <div className='col-lg-4 col-md-12'>
            <Zoom>
                <div className="card team-section p-3">
                    <p>{ dis }</p>
                    <div className="card-body d-flex align-items-center">
                        <div className="card-thumbnail">
                            <img src={ photo } alt="" className="img-fluid" />
                        </div>
                        <div className="card-title mt-2 ms-2">
                            <h5 className='fs-6 text-capitalize'>{ name }</h5>
                            <p className='text-capitalize'>{ country }</p>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default TestimonialCard;