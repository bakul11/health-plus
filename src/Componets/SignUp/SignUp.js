import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import swal from "sweetalert";
import SocialMedia from "../SocialMedia/SocialMedia";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import logPhoto from '../../images/docLogin.png';
import Slide from 'react-reveal/Slide';
import auth from "../Firebase/firebaseConfig";
import useToken from "../../Hooks/useToken";


const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [matchPass, setMatchPass] = useState('');
    const [updateProfile] = useUpdateProfile(auth);

    //==========================================
    //Redirect Before Login 
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    //==========================================

    const [token] = useToken(user);


    if (token) {
        navigate(from, { replace: true });
        swal('Resister Success', 'Register is Successfully Done', 'success');
    }

    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            setMatchPass("Password doesn't match..Please Match Your Password");
        }
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.fullName });
        return;

    }


    return (
        <div className='container mt-5'>
            <div className="row gy-5">
                <div className="col-lg-6">
                    <Slide right>
                        <img src={ logPhoto } alt='photo' className='img-fluid mt-5'></img>
                    </Slide>
                </div>
                <div className="col-lg-5 offset-lg-1">
                    <Slide left>
                        <div className="card p-3 shadow-lg mt-5">
                            <h2 className="mb-4 mt-3 fs-4 text-center text-primary">Please Register Now !</h2>
                            <form onSubmit={ handleSubmit(onSubmit) }>
                                <div className="row gy-2">
                                    <div className="col-lg-12">
                                        <label htmlFor="nn">Name</label><br></br>
                                        <input { ...register("fullName", { required: true }) } type="text" id="nn" placeholder="Name" className="form-control" />
                                        { errors.fullName && <span className="text-danger mt-2">Full Name required</span> }
                                    </div>
                                    <div className="col-lg-12">
                                        <label htmlFor="mm">Email</label><br></br>
                                        <input { ...register("email", { required: true }) } type="email" id="mm" placeholder="Email Address" className="form-control" />
                                        { errors.email && <span className="text-danger mt-2">Email is required</span> }
                                    </div>
                                    {/* if already use this Email Address */ }
                                    <p className="text-danger" style={ { fontWeight: '500' } }>{ error?.message?.includes('email-already-in-use') ? 'You already use this email.Please use another email' : '' }</p>

                                    <div className="col-lg-12">
                                        <label htmlFor="pp">Password</label><br></br>
                                        <input { ...register("password", { required: true }) } type="password" id="pp" placeholder="Create New Password" className="form-control" />
                                        { errors.password && <span className="text-danger mt-2">Password is required</span> }
                                    </div>
                                    <div className="col-lg-12">
                                        <label htmlFor="con">Confirm Password</label><br></br>
                                        <input { ...register("confirmPassword", { required: true }) } type="password" id="con" placeholder="Confirm Password" className="form-control" />
                                        { errors.confirmPassword && <span className="text-danger mt-2">Confirm Password is required</span> }
                                    </div>
                                    {/* if Password doesn't match  */ }
                                    <p className="text-danger" style={ { fontWeight: '500' } }>{ matchPass }</p>
                                    <div className="col-lg-12">
                                        <input type="submit" value='Register' className="btn btn-primary w-100 d-block" />
                                    </div>
                                    {/*Network Error Message */ }
                                    <p className='text-danger text-center m-0' style={ { fontWeight: '500' } }>{ error?.message?.includes('network') ? 'Please Check Your Internet Conection' : '' }</p>
                                </div>
                                {/* Google Login System */ }
                                <div className="social-login mt-4">
                                    <div className="social d-flex justify-content-center align-items-center">
                                        <div className="bg-dark" style={ { height: '2px', width: '100px', borderRadius: '50px' } }></div>
                                        <div className="fw-bold ms-2 me-2" >OR</div>
                                        <div className="bg-dark" style={ { height: '2px', width: '100px', borderRadius: '50px' } }></div>
                                    </div>
                                </div>
                            </form>
                            <SocialMedia></SocialMedia>
                            <p className="text-center mt-3 fs-6">Already have an account? <Link to='/login' className="text-primary">Login</Link></p>
                        </div>
                    </Slide>
                </div>
            </div>

        </div>
    );
};

export default Register;