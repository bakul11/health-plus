import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faFacebookF, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../Firebase/firebaseConfig';
import useUser from '../.././Hooks/useUser'

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);




    const [token] = useUser(user);

    // Redirect User After Login 
    //===============================================================================================
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    if (user) {
        navigate(from, { replace: true });
        swal("Login Done!", "Login Successfully Done !", "success")
    }

    //================================================================================================




    if (token) {
        navigate(from, { replace: true });
        swal("Login Done!", "Login Successfully Done !", "success");
    }

    return (
        <div>
            <div className="row">
                <div className="extra-signup mt-3">
                    <p className='text-center fs-6 mb-2 text-secondary'>Or Sign Up Using</p>
                    <ul className='d-flex justify-content-center'>
                        <li className='ms-0'><FontAwesomeIcon icon={ faFacebookF } style={ { height: '20px', width: '20px', padding: '5px', cursor: 'pointer' } } className='rounded-circle  text-light bg-primary' onClick={ () => signInWithFacebook() } ></FontAwesomeIcon></li>
                        <li className='ms-2'><FontAwesomeIcon icon={ faGoogle } style={ { height: '20px', width: '20px', padding: '5px', cursor: 'pointer' } } className='rounded-circle  text-light bg-danger' onClick={ () => signInWithGoogle() } ></FontAwesomeIcon></li>
                        <li className='ms-2'><FontAwesomeIcon icon={ faGithub } style={ { height: '20px', width: '20px', padding: '5px', cursor: 'pointer' } } className='rounded-circle  text-light bg-success' onClick={ () => signInWithGithub() }></FontAwesomeIcon></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Social;