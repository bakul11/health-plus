import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import AppointmentServices from './AppointmentServices/AppointmentServices';

const AppointmentPages = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentHeader date={ date } setDate={ setDate }></AppointmentHeader>
            <AppointmentServices date={ date }></AppointmentServices>
            <Footer></Footer>
        </div>
    );
};

export default AppointmentPages;