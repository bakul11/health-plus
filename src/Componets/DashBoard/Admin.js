import React, { useEffect, useState } from 'react';
import { Slide } from 'react-reveal';
import AdminCart from './AdminCart';

const Admin = () => {
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/allAdmin`;
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAdmin(data))

    }, [])



    return (
        <div className='container card mt-5'>
            <Slide right>
                <h2 className='text-center pt-4 pb-4 fs-5 '>Total Admin Users: { admin.length }</h2>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className='text-center bg-success text-light '>
                            <tr className='fw-normal fs-6'>
                                <th className='p-2'>Serial</th>
                                <th className='p-2'>Email</th>
                                <th className='p-2'>Make Admin</th>
                                <th className='p-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center text-secondary'>
                            {
                                admin.map((userAdmin, index) => <AdminCart userAdmin={ userAdmin } admin={ admin } setAdmin={ setAdmin } key={ userAdmin._id } index={ index }></AdminCart>)
                            }
                        </tbody>
                    </table>
                </div>
            </Slide>
        </div>
    );
};

export default Admin;