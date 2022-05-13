import React from 'react';
import chair from '../../../images/doctor/chair.png';
import Slide from 'react-reveal/Slide';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';




const AppointmentHeader = ({ date, setDate }) => {


    return (
        <section style={ { paddingTop: '100px' } }>
            <div className='container'>
                <div className="row gy-5">
                    <div className="col-lg-6">
                        <h3 className='fs-4'>Get an Appointment Now</h3>
                        <Slide left>
                            <div className="calender-title">
                                <DayPicker
                                    mode="single"
                                    selected={ date }
                                    onSelect={ setDate }
                                />
                            </div>
                        </Slide>
                    </div>
                    <div className="col-lg-6">
                        <Slide right>
                            <div className="calender-logo">
                                <img src={ chair } alt="logo" />
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentHeader;