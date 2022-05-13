import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';

const DashBoardPages = () => {

    const [dash, setDash] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/findAllOrders')
            .then(res => res.json())
            .then(data => setDash(data))
    }, [])


    return (
        <section>
            <div className="orders container-fluid mt-5 mb-5 ps-3 pe-3">
                <h2 className='text-center mb-5'>Total Booking : { dash.length }</h2>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className='text-center bg-success text-light '>
                            <tr className='fw-normal'>
                                <th>Serial No.</th>
                                <th>Patient Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Gender</th>
                                <th>Services Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dash.map((order, index) =>
                                    <tr className='h3 fs-6' key={ order._id }>
                                        <td className='text-center'>{ index + 1 }</td>
                                        <td>{ order.fullName }</td>
                                        <td>{ order.serviceBookingName }</td>
                                        <td>{ order.email }</td>
                                        <td>{ order.number }</td>
                                        <td>{ order.gender }</td>
                                        <td className='text-center'>{ order.serviceBookingDate }</td>
                                        <td className='text-center'>{ order.serviceBookingTime }</td>
                                        <td className='text-center'><FontAwesomeIcon icon={ faTrashAlt } className='text-danger' style={ { cursor: 'pointer' } } ></FontAwesomeIcon></td>
                                    </tr>


                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default DashBoardPages;