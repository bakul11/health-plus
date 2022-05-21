import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import swal from 'sweetalert';

const OrderCard = ({ order, setOrder }) => {

    const handleDeleteOrder = id => {

        const confirmDelete = window.confirm('Are you want delete your Booking');

        if (confirmDelete) {

            const url = `http://localhost:5000/orderDelete/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaningData = order.filter(order => order._id !== id);
                    setOrder(remaningData);
                    swal('Delete Successfully', 'Your Booking Delete Successfully Done', 'success')
                })
        }
    }





    return (
        <section>
            <div className="order-details text-center pt-4 pb-4">
                <h3 className='fs-5 text-secondary'>Patients Name : { order[0]?.fullName }</h3>
                <h2 className='fs-5 text-secondary mt-2'>Email : { order[0]?.email }</h2>
                <h2 className='fs-5 text-secondary mt-2'>Mobile No : { order[0]?.number }</h2>
                <h2 className='fs-5 text-secondary mt-2'>Gender : { order[0]?.gender }</h2>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className='text-center bg-success text-light '>
                        <tr className='fw-normal'>
                            <th>Serial No.</th>
                            <th>Services Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order?.map((order, index) =>
                                <tr className='h3 fs-6' key={ order._id }>
                                    <td className='text-center'>{ index + 1 }</td>
                                    <td>{ order.serviceBookingName }</td>
                                    <td className='text-center'>{ order.serviceBookingDate }</td>
                                    <td className='text-center'>{ order.serviceBookingTime }</td>
                                    <td className='text-center'><FontAwesomeIcon icon={ faTrashAlt } className='text-danger' style={ { cursor: 'pointer' } } onClick={ () => handleDeleteOrder(order._id) }></FontAwesomeIcon></td>
                                </tr>


                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default OrderCard;