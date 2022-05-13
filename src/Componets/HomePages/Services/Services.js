import { faEye, faHandcuffs, faHeadSideCough, faLungs, faTooth, faVirusCovid } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import RubberBand from 'react-reveal/RubberBand';


const servicesData = [
    {
        'serviceName': 'Teeth Orthodontics',
        'servicesIcon': faLungs,
        'discription': 'teeth Orthodontics Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, fugiat? Quo nisi quibusdam dolorem blanditiis labore eius illo quod veritatis id suscipit quas, placeat esse itaque facere quia repellat amet et sequi animi delectus at earum perspiciatis hic. Tempore aut dolorum quia, cum necessitatibus ducimus quaerat veniam excepturi totam eaque!  '
    },
    {
        'serviceName': 'Cosmetic Dentistry',
        'servicesIcon': faTooth,
        'discription': ' Cosmetic Dentistry Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, fugiat? Quo nisi quibusdam dolorem blanditiis labore eius illo quod veritatis id suscipit quas, placeat esse itaque facere quia repellat amet et sequi animi delectus at earum perspiciatis hic. Tempore aut dolorum quia, cum necessitatibus ducimus quaerat veniam excepturi totam eaque!  '
    },
    {
        'serviceName': 'Teeth Cleaning',
        'servicesIcon': faEye,
        'discription': 'Teeth Cleaning Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, fugiat? Quo nisi quibusdam dolorem blanditiis labore eius illo quod veritatis id suscipit quas, placeat esse itaque facere quia repellat amet et sequi animi delectus at earum perspiciatis hic. Tempore aut dolorum quia, cum necessitatibus ducimus quaerat veniam excepturi totam eaque!  '
    },
    {
        'serviceName': 'Cavity Protection',
        'servicesIcon': faVirusCovid,
        'discription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, fugiat? Quo nisi quibusdam dolorem blanditiis labore eius illo quod veritatis id suscipit quas, placeat esse itaque facere quia repellat amet et sequi animi delectus at earum perspiciatis hic. Tempore aut dolorum quia, cum necessitatibus ducimus quaerat veniam excepturi totam eaque!  '
    },
    {
        'serviceName': 'Pediatric Dental',
        'servicesIcon': faHeadSideCough,
        'discription': 'Pediatric Dental Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, fugiat? Quo nisi quibusdam dolorem blanditiis labore eius illo quod veritatis id suscipit quas, placeat esse itaque facere quia repellat amet et sequi animi delectus at earum perspiciatis hic. Tempore aut dolorum quia, cum necessitatibus ducimus quaerat veniam excepturi totam eaque!  '
    },
    {
        'serviceName': 'Oral Surgery',
        'servicesIcon': faHandcuffs,
        'discription': 'Oral Surgery Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, fugiat? Quo nisi quibusdam dolorem blanditiis labore eius illo quod veritatis id suscipit quas, placeat esse itaque facere quia repellat amet et sequi animi delectus at earum perspiciatis hic. Tempore aut dolorum quia, cum necessitatibus ducimus quaerat veniam excepturi totam eaque!  '
    },
]

const Services = () => {
    return (
        <div className='mt-5 mb-5 container' style={ { paddingTop: '100px' } }>
            <div className="services-title">
                <RubberBand>
                    <h3 className='text-center fs-2 '>HealthCare Services</h3>
                    <div className="services-dot d-flex justify-content-center mt-2">
                        <h5 className='circle-rounded bg-danger' style={ { height: '3px', width: '50px', borderRadius: '50px' } }></h5>
                        <h5 className='circle-rounded bg-danger ms-2 me-2' style={ { height: '3px', width: '20px', borderRadius: '50px' } }></h5>
                        <h5 className='circle-rounded bg-danger' style={ { height: '3px', width: '50px', borderRadius: '50px' } }></h5>
                    </div>
                </RubberBand>
            </div>
            <div className="row gy-5 mt-5">
                {
                    servicesData.map(service => <ServicesCard service={ service } key={ service.serviceName }></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;