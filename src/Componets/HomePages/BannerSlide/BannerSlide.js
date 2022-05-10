import React from 'react';
import slide1 from '../../../images/slide/slide4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'


const BannerSlide = () => {
    return (
        <section style={ { backgroundColor: '#f1faff', paddingTop: '100px' } }>
            <div className='container'>
                <div className="row gy-5">
                    <div className="col-lg-6">
                        <div className="slide-title">
                            <p>we are here for your care</p>
                            <h3 className='mt-2 mb-2 fs-1'>Best Care & <br /> Better Health </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas ducimus? Exercitationem delectus itaque aut omnis magni soluta expedita et ex. Odio quod debitis ipsam magnam quidem animi maiores</p>
                            <button className="btn btn-danger mt-2 p-2">Get Appointment <FontAwesomeIcon icon={ faAngleDoubleRight } className='ms-2'></FontAwesomeIcon></button>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="slide-logo">
                            <img src={ slide1 } alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default BannerSlide;