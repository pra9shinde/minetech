import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import './login.css';

import fbImg from '../../assets/images/fb.svg';
import googleImg from '../../assets/images/google.svg';
import twitterImg from '../../assets/images/twitter.svg';
import loginImg from '../../assets/images/login.png';

import LeftBanner from '../LeftBanner';

import { AuthContext } from '../../context/authContext';

const Login = () => {
    let navigate = useNavigate();
    const [user, setUser] = useContext(AuthContext);

    const [formValues, setFormValues] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const loginHandler = (e) => {
        e.preventDefault();
        setErrors(validateForm(formValues));
        setIsSubmit(true);
        if (Object.keys(errors).length === 0 && isSubmit) {
            login();
        }
    };

    const validateForm = (values) => {
        const errors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(values.email)) {
            errors.email = 'Enter valid email address';
        }

        if (!values.password) {
            errors.password = 'Please enter the password';
        }

        return errors;
    };

    const login = () => {
        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};

        if (!users[formValues.email]) {
            alert('You are not a registered user, Please register');
            return;
        }

        const bytes = CryptoJS.AES.decrypt(users[formValues.email].password, 'We1c0me@123');
        const decryptPass = bytes.toString(CryptoJS.enc.Utf8);
        if (decryptPass === formValues.password) {
            // Create a token and store it in a localstorage
            const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(users[formValues.email]), 'We1c0me@123').toString();
            localStorage.setItem('usersToken', ciphertext);
            setUser(ciphertext);
            navigate('/');
            alert('Login Successfull');
        } else {
            alert('Incorrect Login Credentials');
        }
    };

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <>
            <div className='full-viewheight'>
                <div className='login-signup-container mobile-hide'>
                    <LeftBanner img={loginImg} />
                    <div className='login-signup__right'>
                        <div className='login-signup__right-container'>
                            <div className='login__title'>
                                <h1>Login</h1>
                            </div>
                            <div className='login__form'>
                                <form onSubmit={loginHandler}>
                                    <div className='input'>
                                        <label htmlFor='email'>Email</label>
                                        <input type='text' name='email' id='email' placeholder='ex : johndoe@email.com' onChange={handleChange} />
                                        <p className='form-error'>{errors.email}</p>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='password'>Password</label>
                                        <input
                                            type='password'
                                            name='password'
                                            id='password'
                                            placeholder='Enter your password'
                                            onChange={handleChange}
                                        />
                                        <p className='form-error'>{errors.password}</p>
                                    </div>
                                    <div className='btn'>
                                        <button type='submit'>Log in</button>
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
                                </form>
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
