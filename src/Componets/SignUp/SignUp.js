import React, { useState } from 'react';
import logoSign from '../.././images/medical.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faUnlockKeyhole, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Social from '../.././Componets/Social/Social'
import auth from '../Firebase/firebaseConfig';
import Footer from '../Shared/Footer/Footer';
import Slide from 'react-reveal/Slide';


const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [customError, setCustomError] = useState('');
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loadning,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const GoSignInNavigate = useNavigate();


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
    if (user) {
        navigate(from, { replace: true });
        swal("Registration Done!", "Register Successfully Done !", "success");
    }

    const handleGoSignIn = () => {
        GoSignInNavigate('/login');
    }

    //Handle Name 
    const handleName = e => {
        setName(e.target.value);
    }
    //Handle Email 
    const handleEmail = e => {
        setEmail(e.target.value);

    }

    //Handle Password 
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    //Handle Confirm Password 
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
        console.log(user);

    }


    //Handle Submit All Data 
    const handleSubmitData = event => {
        if (password !== confirmPassword) {
            setCustomError("Password doesn't match..Please Match Your Password");
            event.preventDefault();
            return;
        }
        createUserWithEmailAndPassword(email, password)
        event.preventDefault();
        return;
    }



    return (
        <section>
            <div className='container'>
                <div className="row gy-5">
                    <div className="col-lg-6">
                        <Slide right>
                            <div className="logo mt-5">
                                <img src={ logoSign } alt="logo" className='img-fluid d-block mx-auto' style={ { height: '350px', width: '500px' } } />
                            </div>
                        </Slide>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <Slide left>
                            <div className="register mt-4 mb-5">
                                <div className="card pt-3 pb-2">
                                    <h3 className='text-center fs-4 mb-4'>Please Register Now !</h3>
                                    <form onSubmit={ handleSubmitData }>
                                        <div className="row gy-1 ps-2 pe-2">
                                            <div className="col-lg-12">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text bg-primary" id="basic-addon1"><FontAwesomeIcon icon={ faUserAlt } className='text-light'></FontAwesomeIcon></span>
                                                    <input type="text" className="form-control p-2" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1" required onBlur={ handleName } />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text bg-primary" id="basic-addon1"><FontAwesomeIcon icon={ faEnvelopeOpenText } className='text-light'></FontAwesomeIcon></span>
                                                    <input type="email" className="form-control p-2" placeholder="Email address" aria-label="Username" aria-describedby="basic-addon1" required onBlur={ handleEmail } />
                                                </div>
                                            </div>
                                            {/* Already have a email */ }
                                            <p className='text-danger text-center m-0' style={ { fontWeight: '500' } }>{ error?.message?.includes('already') ? 'You already use this email.Please use another account' : '' }</p>
                                            <div className="col-lg-12">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text bg-primary" id="basic-addon1"><FontAwesomeIcon icon={ faUnlockKeyhole } className='text-light'></FontAwesomeIcon></span>
                                                    <input type="password" className="form-control p-2" placeholder="Create new Password" aria-label="Username" aria-describedby="basic-addon1" required onBlur={ handlePassword } />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text bg-primary" id="basic-addon1"><FontAwesomeIcon icon={ faUnlockKeyhole } className='text-light'></FontAwesomeIcon></span>
                                                    <input type="password" className="form-control p-2" placeholder="Confirm Password" aria-label="Username" aria-describedby="basic-addon1" required onBlur={ handleConfirmPassword } />
                                                </div>
                                            </div>
                                            {/* Password doesn't match */ }
                                            <p className='text-danger text-center m-0' style={ { fontWeight: '500' } }>{ customError }</p>
                                            <div className="col-lg-12">
                                                <input type="checkbox" name="" id="check" className='pe-2' onClick={ () => setAgree(!agree) } />
                                                <label htmlFor="check" className={ agree ? 'ps-2 text-primary' : 'ps-2 text-danger' }>I agree to the terms and conditions</label>
                                            </div>
                                            <div className="col-lg-12">
                                                <input type="submit" className="form-control form-control-lg fs-6 fw-bold bg-primary text-light" disabled={ !agree } value='Register Now' />
                                            </div>
                                        </div>
                                        {/* Social Media add */ }
                                        <Social></Social>
                                        <div className="account text-center mt-3">
                                            <p className='text-secondary'>Already have an account ? <span className='text-primary fw-bold' style={ { cursor: 'pointer' } } onClick={ handleGoSignIn }>Login Now</span></p>
                                        </div>
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

export default SignUp;