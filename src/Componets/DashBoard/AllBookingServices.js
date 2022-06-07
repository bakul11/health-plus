import React, { useEffect, useState } from 'react';
import { Slide } from 'react-reveal';

const AllBookingServices = () => {
    const [service, setService] = useState([]);
   
    useEffect(() => {
        const url = `http://localhost:5000/allBookingOrder`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

   

    return (
        <div className='container card mt-5'>
            <Slide right>
                <h2 className='text-center pt-4 pb-4 fs-5 '>Total Booking Services: { service.length }</h2>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className='text-center bg-success text-light '>
                            <tr className='fw-normal fs-6'>
                                <th className='p-2'>Serial</th>
                                <th className='p-2'>UserName</th>
                                <th className='p-2'>Services</th>
                                <th className='p-2'>Email</th>
                                <th className='p-2'>Mobile</th>
                                <th className='p-2'>Gender</th>
                                <th className='p-2'>Date</th>
                            </tr>
                        </thead>
                        <tbody className='text-center text-secondary'>
                            {
                                service.map((service, index) =>

                                    <tr key={ service._id } className='fs-6'>
                                        <td className='pt-2 pb-2 ps-1 pe-1 '>{ index + 1 }</td>
                                        <td className='pt-2 pb-2 ps-1 pe-1'>{ service?.fullName }</td>
                                        <td className='pt-2 pb-2 ps-1 pe-1'>{ service?.serviceBookingName }</td>
                                        <td className='pt-2 pb-2 ps-1 pe-1'>{ service?.email }</td>
                                        <td className='pt-2 pb-2 ps-1 pe-1 '>{ service?.number }</td>
                                        <td className='pt-2 pb-2 ps-1 pe-1'>{ service?.gender }</td>
                                        <td className='pt-2 pb-2 ps-1 pe-1'>{ service?.serviceBookingTime }</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </Slide>
        </div>
    );
};


export default AllBookingServices;