import { format } from 'date-fns';
import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebaseConfig';

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//     },
// };

Modal.setAppElement('#root');

const BookModal = ({ modalIsOpen, closeModal, services, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const onSubmit = data => {

        const url = 'http://localhost:5000/bookingOrder';

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                navigate('/dashboard/myservices');
                swal('Booking Successfully', 'Your boooing successfully done and thanks you', 'success');

            })



    }

    return (
        <div className='container'>
            <Modal id='modal'
                isOpen={ modalIsOpen }
                onRequestClose={ closeModal }
            // style={ customStyles }

            >
                <div className="row">
                    <div className="col-lg-9 mx-auto shadow-lg pt-3 pb-3">
                        <h2 className='fs-4 text-center mb-2'>{ services.name }</h2>
                        <br />
                        {/* Form Details */ }
                        <form onSubmit={ handleSubmit(onSubmit) }>

                            <div className="row gy-3">
                                <div className="col-lg-12">
                                    <input type="text"{ ...register("serviceBookingDate", { required: true }) } value={ format(date, 'PP') } className='form-control ' readOnly />
                                    { errors.serviceBookingDate && <span className='text-danger '>This field is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <input type="text"{ ...register("serviceBookingName", { required: true }) } value={ services.name } className='form-control ' readOnly />
                                    { errors.serviceBookingName && <span className='text-danger '>This field is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <input type="text"{ ...register("fullName", { required: true }) } value={ user?.displayName } className='form-control ' readOnly />
                                    { errors.fullName && <span className='text-danger '>This field is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <input type="email"{ ...register("email", { required: true }) } value={ user?.email } readOnly className='form-control ' />
                                    { errors.email && <span className='text-danger '>This field is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <input type="number"{ ...register("number", { required: true }) } placeholder="Mobile Numbers" className='form-control ' />
                                    { errors.number && <span className='text-danger '>This field is required</span> }
                                </div>
                                <div className="col-lg-12">
                                    <select className='form-control ' { ...register("gender", { required: true }) }>
                                        <option selected>Select Gender</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                        <option value="Others">Others</option>
                                    </select>
                                    { errors.gender && <span className='text-danger '>This field is required</span> }
                                </div>
                            </div>
                            <div className="col-lg-12 mt-3">
                                <select className='form-control ' { ...register("serviceBookingTime", { required: true }) }>
                                    {
                                        services.slots.map(slot => <option>{ slot }</option>)
                                    }
                                </select>
                                { errors.serviceBookingTime && <span className='text-danger '>This field is required</span> }
                            </div>

                            <div className="submitCancel mt-4">
                                <input type="submit" className='btn btn-success' value='Submit Now' />
                                <button onClick={ closeModal } className='btn btn-danger ms-2'>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default BookModal;