import React, { useState } from 'react';
import logoSign from '../.././images/docLogin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faUnlockKeyhole, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Social from '../.././Componets/Social/Social'
import auth from '../Firebase/firebaseConfig';
import Footer from '../Shared/Footer/Footer';
import Slide from 'react-reveal/Slide';
import useUser from '../.././Hooks/useUser';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [customError, setCustomError] = useState('');


    const [
        signInWithEmailAndPassword,
        user,
        loadning,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);



    //data get from mongodb

    const [token] = useUser(user);

    //data get from mongodb





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

    const GoSignInNavigate = useNavigate();

    const handleGoSignIn = () => {
        GoSignInNavigate('/signup');
    }

    if (token) {
        navigate(from, { replace: true });
        swal("Login Done!", "Login Successfully Done !", "success");
    }

    //Handle Email 
    const handleEmail = e => {
        setEmail(e.target.value);

    }

    //Handle Password 
    const handlePassword = e => {
        setPassword(e.target.value);
    }


    //Handle Submit All Data 
    const handleSubmitData = event => {
        signInWithEmailAndPassword(email, password)
        event.preventDefault();
        return;
    }

    //Handle Forget Password
    const handleForgetPassword = async () => {
        await sendPasswordResetEmail(email);
        swal("Check Email!", "Please Chcek your email !", "success");
    }


    return (
        <section>
            <div className='container'>
                <div className="row gy-5">
                    <div className="col-lg-5">
                        <Slide right>
                            <div className="logo mt-5">
                                <img src={ logoSign } alt="logo" className='img-fluid' />
                            </div>
                        </Slide>
                    </div>
                    <div className="col-lg-5 offset-lg-2">
                        <Slide left>
                            <div className="register mt-4 mb-5">
                                <div className="card pt-3 pb-5">
                                    <h3 className='text-center fs-4 mb-4'>Please Login Now !</h3>
                                    <form onSubmit={ handleSubmitData }>
                                        <div className="row gy-2 ps-2 pe-2">
                                            <div className="col-lg-12">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text bg-primary" id="basic-addon1"><FontAwesomeIcon icon={ faEnvelopeOpenText } className='text-light'></FontAwesomeIcon></span>
                                                    <input type="email" className="form-control p-2" placeholder="Email address" aria-label="Username" aria-describedby="basic-addon1" required onBlur={ handleEmail } />
                                                </div>
                                            </div>
                                            {/* You Have no account  */ }
                                            <p className='text-danger m-0' style={ { fontWeight: '500' } }>{ error?.message?.includes('user-not') ? 'You have no account.Please create new account' : '' }</p>
                                            <div className="col-lg-12">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text bg-primary" id="basic-addon1"><FontAwesomeIcon icon={ faUnlockKeyhole } className='text-light'></FontAwesomeIcon></span>
                                                    <input type="password" className="form-control p-2" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" required onBlur={ handlePassword } />
                                                </div>
                                            </div>
                                            {/* Wrong Password */ }
                                            <p className='text-danger m-0 text-center' style={ { fontWeight: '500' } }>{ error?.message?.includes('wrong-password') ? 'Wrong Password..Please try again' : '' }</p>
                                            <div className="forget-password">
                                                <p className='text-end' style={ { cursor: 'pointer' } } onClick={ handleForgetPassword }>Forget Password ?</p>
                                            </div>
                                            {/* Password doesn't match */ }
                                            <p className='text-danger text-center m-0' style={ { fontWeight: '500' } }>{ customError }</p>
                                            <div className="col-lg-12">
                                                <input type="submit" className="form-control form-control-lg fs-6 fw-bold bg-primary text-light" value='Login Now' />
                                            </div>
                                        </div>
                                        {/* Extra Social Media */ }
                                        <Social></Social>
                                        <div className="account text-center mt-3">
                                            <p className='text-secondary'>have not account yet ? <span className='text-primary fw-bold' style={ { cursor: 'pointer' } } onClick={ handleGoSignIn }>SignUp Now</span></p>
                                        </div>
                                        {/* network Error  */ }
                                        <p className='text-danger text-center m-0' style={ { fontWeight: '500' } }>{ error?.message?.includes('network') ? 'Please Check Your Internet Conection' : '' }</p>
                                    </form>

                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div >
            <Footer></Footer>
        </section >
    );
};

export default LogIn;