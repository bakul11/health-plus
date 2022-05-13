import React from 'react';
import team1 from '../../../images/doctor/people1.png'
import team2 from '../../../images/doctor/people2.png'
import team3 from '../../../images/doctor/people3.png'
import Zoom from 'react-reveal/Zoom';

import TestimonialCard from '../TestimonialCard/TestimonialCard';

const testimonialData = [
    {
        photo: team1,
        name: "walson herry",
        country: "california",
        dis: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto nesciunt hic error necessitatibus et saepe magni, ipsam obcaecati magnam debitis vero optio distinctio ab cupiditate odit at ipsa nostrum!"
    },
    {
        photo: team2,
        name: "selima gomez",
        country: "japan",
        dis: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto nesciunt hic error necessitatibus et saepe magni, ipsam obcaecati magnam debitis vero optio distinctio ab cupiditate odit at ipsa nostrum!"
    },
    {
        photo: team3,
        name: "natasha malkova",
        country: "california",
        dis: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis architecto nesciunt hic error necessitatibus et saepe magni, ipsam obcaecati magnam debitis vero optio distinctio ab cupiditate odit at ipsa nostrum!"
    },

]

const Testimonial = () => {
    return (
        <div className='container'>
            <div className="Testimonial-title">
                <Zoom>
                    <p>we are here for your care</p>
                    <h3 className='mt-2 mb-2 fs-3 mb-4'>What's our  Patients <br /> says </h3>
                </Zoom>
            </div>
            <div className="row gy-4">
                {
                    testimonialData.map(testimonial => <TestimonialCard testimonial={ testimonial } key={ testimonial.name }></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;