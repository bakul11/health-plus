import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const DoctorList = () => {
    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getDoctor')
            .then(res => res.json())
            .then(data => setDoctor(data))
    })



    return (
        <div className='mt-5'>
            <h2 className='text-center mb-3'>All Doctor List</h2>
            <table className="table table-bordered">
                <thead className='text-center bg-success text-light '>
                    <tr>
                        <th>Serial No</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Services Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctor.map((doctor, index) =>

                            <tr>
                                <td className='text-center'>{ index + 1 }</td>
                                <td><img src={ doctor.photo } alt={ doctor.name } className='d-block mx-auto' style={ { height: '50px', width: '50px' } }></img></td>
                                <td className='text-center'>{ doctor.name }</td>
                                <td className='text-center'>{ doctor.email }</td>
                                <td className='text-center'>{ doctor.services }</td>
                                <td className='text-center'><FontAwesomeIcon icon={ faTrashAlt } className='text-danger' style={ { cursor: 'pointer' } } ></FontAwesomeIcon></td>
                            </tr>



                        )
                    }
                </tbody>
            </table>
        </div>

    );
};

export default DoctorList;