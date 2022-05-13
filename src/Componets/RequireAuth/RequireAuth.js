import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebaseConfig';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return (
            <div className='text-center mt-5'>
                <p className='text-center mt-5 fw-bold'>Loading...</p>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={ { from: location } } replace />;
    }
    return children;
};

export default RequireAuth;