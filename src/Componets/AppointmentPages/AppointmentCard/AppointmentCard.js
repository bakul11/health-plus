import Zoom from 'react-reveal/Zoom';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import BookModal from '../BookModal/BookModal';


const AppointmentCard = ({ services, date }) => {
    const { slots, name } = services;

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='col-lg-4 col-md-6'>
            <Zoom>
                <div className="shadow-lg">
                    <div className="card-body text-center">
                        <h3 className='fs-5'>{ name }</h3>
                        <p className='mt-2 mb-2'>
                            {
                                slots.length > 0 ? <span>{ slots[0] }</span> : <span className='text-danger'>no space try another day</span>
                            }
                        </p>

                        <p>
                            {
                                slots.length > 0 ? <span>{ slots.length } space Avaiable</span> : <span className='text-danger'>out of spaces</span>
                            }
                        </p>
                        <button className="btn btn-primary mt-2" disabled={ slots.length === 0 } onClick={ openModal }>Book Appointment <FontAwesomeIcon icon={ faAngleDoubleRight } className='ms-2'></FontAwesomeIcon></button>
                        <BookModal modalIsOpen={ modalIsOpen } closeModal={ closeModal } services={ services } date={ date }></BookModal>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default AppointmentCard;