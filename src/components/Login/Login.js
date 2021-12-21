import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

import fbImg from '../../assets/images/fb.svg';
import googleImg from '../../assets/images/google.svg';
import twitterImg from '../../assets/images/twitter.svg';
import loginImg from '../../assets/images/login.png';

import LeftBanner from '../LeftBanner';

const Login = () => {
    return (
        <>
            <div className='full-viewheight'>
                <div className='login-signup-container'>
                    <LeftBanner img={loginImg} />
                    <div className='login-signup__right'>
                        <div className='login-signup__right-container'>
                            <div className='login__title'>
                                <h1>Login</h1>
                            </div>
                            <div className='login__form'>
                                <div className='input'>
                                    <label htmlFor='email'>Email</label>
                                    <input type='text' name='email' id='email' placeholder='ex : johndoe@email.com' />
                                </div>
                                <div className='input'>
                                    <label htmlFor='password'>Password</label>
                                    <input type='password' name='password' id='password' placeholder='Enter your password' />
                                </div>
                                <div className='btn'>
                                    <button>Log in</button>
                                </div>
                                <div className='login__infotext'>
                                    <p>Or Log in using</p>
                                </div>
                                <div className='login__social'>
                                    <div className='icon'>
                                        <img src={twitterImg} alt='' />
                                    </div>
                                    <div className='icon'>
                                        <img src={fbImg} alt='' />
                                    </div>
                                    <div className='icon'>
                                        <img src={googleImg} alt='' />
                                    </div>
                                </div>
                                <div className='login__bottom'>
                                    <p>
                                        Don't Have An Account? <Link to='/register'>Sign Up</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
