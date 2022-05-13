import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebaseConfig';
import OrderCard from '../OrderCard/OrderCard';


const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/allOrder?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
            })
    }, [order])

    return (
        <div className='container mt-5 mb-5'>
            <h3 className='text-center mb-3'>My total Order : { order.length > 0 ? order.length : <span className='text-danger'>No order</span> }</h3>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <OrderCard order={ order } setOrder={ setOrder }></OrderCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;