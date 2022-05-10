import React from 'react';
import Footer from '../Shared/Footer/Footer';
import BannerSlide from './BannerSlide/BannerSlide';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Story from './Story/Story';
import Testimonial from './Testimonial/Testimonial';


const HomePages = () => {
    return (
        <div>
            <BannerSlide></BannerSlide>
            <Services></Services>
            <Story></Story>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default HomePages;