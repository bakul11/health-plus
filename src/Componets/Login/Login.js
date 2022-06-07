import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import logPhoto from '../../images/medical.jpg';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import Slide from 'react-reveal/Slide';
import auth from '../Firebase/firebaseConfig';
import useToken from '../../Hooks/useToken';




const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
        return;

    }

    const [token] = useToken(user);

    //==========================================
    //Redirect Before Login 
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    //==========================================


    if (token) {
        navigate(from, { replace: true });
        swal('Login Success', 'Login is Successfully Done', 'success');
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
                            <h2 className="mb-4 mt-3 fs-4 text-center text-primary">Login Now !</h2>
                            <form onSubmit={ handleSubmit(onSubmit) }>
                                <div className="row gy-3">
                                    <div className="col-lg-12">
                                        <label htmlFor="mm">Email</label><br></br>
                                        <input { ...register("email", { required: true }) } type="email" id="mm" placeholder="Email Address" className="form-control" />
                                        { errors.email && <span className="text-danger mt-2">Email is required</span> }
                                    </div>
                                    <p className='text-danger' style={ { fontWeight: '500' } }>{ error?.message?.includes('user-not-found') ? 'You have no account.Please create an account' : '' }</p>
                                    <div className="col-lg-12">
                                        <label htmlFor="pp">Password</label><br></br>
                                        <input { ...register("password", { required: true }) } type="password" id="pp" placeholder="Password" className="form-control" />
                                        { errors.password && <span className="text-danger mt-2">Password is required</span> }
                                    </div>
                                    <p className='text-danger' style={ { fontWeight: '500' } }>{ error?.message?.includes('wrong-password') ? 'Wrong Password..please right password' : '' }</p>
                                    <div className="col-lg-12">
                                        <input type="submit" value='Login' className="btn btn-primary w-100 d-block" />
                                    </div>
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
                            <p className="text-center mt-3 fs-6">Don't have a account? <Link to='/signup' className="text-primary">Register</Link></p>
                        </div>
                      
                     
                    </Slide>
                </div>
            </div>

        </div>
    );
};

export default Login;