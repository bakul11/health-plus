import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Slide } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../Firebase/firebaseConfig';
import { signOut } from 'firebase/auth';

const MyServices = () => {
    const [service, setService] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    const email = user?.email;
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://tranquil-tor-96157.herokuapp.com/myServices?email=${email}`;
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate('/');
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                }
                return res.json()
            })
            .then(data => setService(data))
    }, [user])

    //Delete Orders
    const handleDeleteservice = id => {
        const confirmDelete = window.confirm('Do You Want Delete This Services?');

        if (confirmDelete) {
            const url = `https://tranquil-tor-96157.herokuapp.com/deleteOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {

                    if (result.deletedCount > 0) {
                        const remaingService = service.filter(service => service._id !== id);
                        setService(remaingService);
                        swal('Delete Success', 'Your Services is Successfully Done', 'success');
                    }

                })
                .catch(err => {
                    swal('Delete fail', 'Your Services is delete fail', 'error');
                })

        }
    }




    return (
        <div className='container card mt-5'>
            <Slide right>
                <h2 className='text-center pt-4 pb-4 fs-5'>Your Booking Services: { service.length }</h2>
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
                                <th className='p-2'>Action</th>
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
                                        <td className='pt-2 pb-2 ps-1 pe-1'><FontAwesomeIcon icon={ faTrashAlt } className='text-danger' style={ { cursor: 'pointer' } } onClick={ () => handleDeleteservice(service?._id) }></FontAwesomeIcon></td>
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

export default MyServices;