import React, { useState, useEffect } from 'react';

const AdminUser = () => {
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allUser')
            .then(res => res.json())
            .then(data => {
                setAdmin(data);
                console.log(data);
            })

    }, [])

    return (
        <div className='mt-5 mb-5'>
            <h3 className='text-center mb-5'>All Admin User</h3>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead className='text-center bg-success text-light '>
                        <tr className='fw-normal'>
                            <th>Serial No.</th>
                            <th>User Name</th>
                            <th>Admin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            admin.map((admin, index) =>
                                <tr className='h3 fs-6' key={ admin._id }>
                                    <td className='text-center'>{ index + 1 }</td>
                                    <td>{ admin.email }</td>
                                    <td className='text-center'><button className='btn btn-warning'>Make Admin</button></td>
                                    <td className='text-center'><button className='btn btn-danger'>Remove Admin</button></td>
                                </tr>


                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUser;