import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login.png';

import LeftBanner from '../LeftBanner';

const index = () => {
    return (
        <div className='full-viewheight'>
            <div className='login-signup-container'>
                <LeftBanner img={loginImg} />
                <div className='login-signup__right'>
                    <div className='login-signup__right-container'>
                        <div className='login__title'>
                            <h1>Sign up</h1>
                        </div>
                        <div className='login__form'>
                            <div className='input'>
                                <label htmlFor='name'>Name</label>
                                <input type='text' name='name' id='name' placeholder='ex : John' />
                            </div>

                            <div className='input'>
                                <label htmlFor='email'>Email</label>
                                <input type='text' name='email' id='email' placeholder='ex : johndoe@email.com' />
                            </div>

                            <div className='col2'>
                                <div className='input'>
                                    <label htmlFor='phone'>Phone number</label>
                                    <input type='text' name='phone' id='phone' placeholder='0000000000' />
                                </div>
                                <div className='input'>
                                    <label htmlFor='dob'>Date of Birth</label>
                                    <input type='text' name='dob' id='dob' placeholder='DD/MM/YYYY' />
                                </div>
                            </div>

                            <div className='input'>
                                <label htmlFor='password'>Password</label>
                                <input type='password' name='password' id='password' placeholder='Enter your password' />
                            </div>

                            <div className='checkbox-input'>
                                <div className='custom-checkbox'>
                                    <input type='checkbox' name='terms' defaultChecked={true} />
                                    <span className='checkmark'></span>
                                </div>
                                <p>
                                    I accept the <span className='primary-color-text'>Terms & conditions</span>
                                </p>
                            </div>

                            <div className='btn'>
                                <button>Signup</button>
                            </div>
                            <div className='login__bottom'>
                                <p>
                                    Already Have An Account? <Link to='/login'>Login</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
