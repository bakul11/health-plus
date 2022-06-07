import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useToken from '../../Hooks/useToken';
import auth from '../Firebase/firebaseConfig';

const SocialMedia = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [token] = useToken(user);

    if (token) {
        navigate(from, { replace: true });
        swal('Login Success', 'Login is Successfully Done', 'success');
    }
    return (
        <div className='container-fluid'>
            <div className="col-lg-12 mt-2">
                <button className="btn btn-danger d-block w-100 fs-6" style={ { borderRadius: '50px' } } onClick={ () => signInWithGoogle() }>
                    <FontAwesomeIcon icon={ faGoogle } className='me-2'></FontAwesomeIcon>
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default SocialMedia;