import { faEye, faHandcuffs, faHeadSideCough, faLungs, faTooth, faVirusCovid } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';


const servicesData = [
    {
        'serviceName': 'body surgery',
        'servicesIcon': faLungs,
        'discription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas ducimus? Exercitationem delectus itaque aut  '
    },
    {
        'serviceName': 'dantal care',
        'servicesIcon': faTooth,
        'discription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas ducimus? Exercitationem delectus itaque aut  '
    },
    {
        'serviceName': 'eye care',
        'servicesIcon': faEye,
        'discription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas ducimus? Exercitationem delectus itaque aut  '
    },
    {
        'serviceName': 'blood cancer',
        'servicesIcon': faVirusCovid,
        'discription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas ducimus? Exercitationem delectus itaque aut  '
    },
    {
        'serviceName': 'neurology sergery',
        'servicesIcon': faHeadSideCough,
        'discription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas ducimus? Exercitationem delectus itaque aut  '
    },
    {
        'serviceName': 'alligic issue',
        'servicesIcon': faHandcuffs,
        'discription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quas ducimus? Exercitationem delectus itaque aut  '
    },
]

const Services = () => {
    return (
        <div className='mt-5 mb-5 container' style={ { paddingTop: '100px' } }>
            <div className="services-title">
                <h3 className='text-center fs-2 '>HealthCare Services</h3>
                <div className="services-dot d-flex justify-content-center mt-2">
                    <h5 className='circle-rounded bg-danger' style={ { height: '3px', width: '50px', borderRadius: '50px' } }></h5>
                    <h5 className='circle-rounded bg-danger ms-2 me-2' style={ { height: '3px', width: '20px', borderRadius: '50px' } }></h5>
                    <h5 className='circle-rounded bg-danger' style={ { height: '3px', width: '50px', borderRadius: '50px' } }></h5>
                </div>
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