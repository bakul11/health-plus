import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const AddDoctors = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const [doctor, setDoctor] = useState([]);

    const imageScreetKey = '92f1b0b325d1cb1274913bccc98c934c';

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(result => {
                setDoctor(result);
            })
    }, [])


    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageScreetKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const photo = result.data.url;
                    const dhakaData = {
                        name: data.doctorName,
                        services: data.serviceName,
                        email: data.email,
                        photo: photo

                    }
                    //Doctor post in Server
                    fetch('http://localhost:5000/addToDoctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(dhakaData)
                    })
                        .then(res => res.json())
                        .then(result => {
                            navigate('/dash/DoctorList')
                            swal('Doctor Add Success', 'Your doctor added sucessfully done', 'success');
                        })
                        .catch(err => {
                            swal('Doctor Add fail', 'Your doctor fail try aggain', 'error');
                        })
                }

            })
    }






    return (
        <div className='mt-5'>
            <h2 className='mb-3'>Add Doctors</h2>
            <div className="row">
                <div className="col-lg-5">
                    <form onSubmit={ handleSubmit(onSubmit) }>

                        <div className="row gy-3">
                            <div className="col-lg-12">
                                <input type="text"{ ...register("doctorName", { required: true }) } placeholder='Doctors Name' className='form-control ' />
                                { errors.doctorName && <span className='text-danger '>Name is required</span> }
                            </div>
                            <div className="col-lg-12">
                                <input type="email"{ ...register("email", { required: true }) } placeholder='Email address' className='form-control ' />
                                { errors.email && <span className='text-danger '>Email is required</span> }
                            </div>
                            <div className="col-lg-12">

                                <select className='form-control ' { ...register("serviceName", { required: true }) }>
                                    {
                                        doctor.map(doc =>
                                            <option value={ doc.name }>{ doc.name }</option>
                                        )
                                    }
                                </select>
                                { errors.serviceName && <span className='text-danger '>Please Select Services Name</span> }
                            </div>
                        </div>

                        <div className="col-lg-12 mt-3">
                            <input type="file"{ ...register("image", { required: true }) } className='form-control ' />
                            { errors.image && <span className='text-danger '>image is required</span> }
                        </div>

                        <div className='d-flex justify-content-end'>
                            <input type="submit" className='btn btn-success mt-3  w-100 d-block mb-2' value="Add Doctor" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctors;