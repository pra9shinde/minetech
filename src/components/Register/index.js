import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';

import './register.css';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login.png';

import LeftBanner from '../LeftBanner';

const Index = () => {
    let navigate = useNavigate();

    const initialValues = { name: '', email: '', phoneNo: '', dob: '', password: '', checkbox: false };
    const [formValues, setFromValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const validateForm = (values) => {
        const errors = {};

        const nameRegex = /^[a-zA-Z\s]*$/;
        if (!values.name) {
            errors.name = 'Name is required';
        } else if (!nameRegex.test(values.name)) {
            errors.name = 'Only alphabets & spaces are allowed';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(values.email)) {
            errors.email = 'Enter valid email address';
        }

        const phoneRegex = /^\d{10}$/;
        if (!values.phoneNo) {
            errors.phoneNo = 'Phone no is required';
        } else if (!phoneRegex.test(values.phoneNo)) {
            errors.phoneNo = 'Enter valid Phone No';
        }

        const dobRegex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
        if (!values.dob) {
            errors.dob = 'DOB is required';
        } else if (!dobRegex.test(values.dob)) {
            errors.dob = 'dd/mm/yyy is correct date format';
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!values.password) {
            errors.password = 'Password is required';
        } else if (!passwordRegex.test(values.password)) {
            errors.password = 'Password must have a letter, number & special character. Minimum 8 characters';
        }

        if (!values.checkbox) {
            errors.checkbox = 'Please accept our terms';
        }

        return errors;
    };

    const signUpHandler = (e) => {
        e.preventDefault();
        setErrors(validateForm(formValues));
        setIsSubmit(true);
        if (Object.keys(errors).length === 0 && isSubmit) {
            register();
        }
    };

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === 'checkbox') {
            value = !formValues.checkbox;
        }

        setFromValues({ ...formValues, [name]: value });
    };

    const register = () => {
        const enctryptedPass = CryptoJS.AES.encrypt(formValues.password, 'We1c0me@123').toString();

        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};
        const temp = { ...users };

        if (!temp[formValues.email]) {
            temp[formValues.email] = { ...formValues, password: enctryptedPass };
            localStorage.setItem('users', JSON.stringify(temp));
            navigate('/login');
            alert('Registration completed, please login');
        } else {
            alert('Email address already used');
        }
    };

    useEffect(() => {
        console.log(errors);
        // console.log(formValues);
        if (Object.keys(errors).length === 0 && isSubmit) {
        }
    }, [formValues]);

    return (
        <div className='full-viewheight register'>
            <div className='login-signup-container mobile-hide'>
                <LeftBanner img={loginImg} />
                <div className='login-signup__right'>
                    <div className='login-signup__right-container'>
                        <div className='login__title'>
                            <h1>Sign up</h1>
                        </div>
                        <div className='login__form'>
                            <form onSubmit={signUpHandler}>
                                <div className='input'>
                                    <label htmlFor='name'>Name</label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        placeholder='ex : John'
                                        value={formValues.name}
                                        onChange={handleChange}
                                    />
                                    <p className='form-error'>{errors.name}</p>
                                </div>

                                <div className='input'>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        type='text'
                                        name='email'
                                        id='email'
                                        placeholder='ex : johndoe@email.com'
                                        value={formValues.email}
                                        onChange={handleChange}
                                    />
                                    <p className='form-error'>{errors.email}</p>
                                </div>

                                <div className='col2'>
                                    <div className='input'>
                                        <label htmlFor='phoneNo'>Phone number</label>
                                        <input
                                            type='text'
                                            name='phoneNo'
                                            id='phoneNo'
                                            placeholder='0000000000'
                                            value={formValues.phoneNo}
                                            onChange={handleChange}
                                            maxLength={10}
                                        />
                                        <p className='form-error'>{errors.phoneNo}</p>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor='dob'>Date of Birth</label>
                                        <input
                                            type='text'
                                            name='dob'
                                            id='dob'
                                            placeholder='DD/MM/YYYY'
                                            value={formValues.dob}
                                            onChange={handleChange}
                                        />
                                        <p className='form-error'>{errors.dob}</p>
                                    </div>
                                </div>

                                <div className='input'>
                                    <label htmlFor='password'>Password</label>
                                    <input
                                        type='password'
                                        name='password'
                                        id='password'
                                        placeholder='Enter your password'
                                        value={formValues.password}
                                        onChange={handleChange}
                                    />
                                    <p className='form-error'>{errors.password}</p>
                                </div>

                                <div className='checkbox-input'>
                                    <div className='custom-checkbox'>
                                        <input type='checkbox' name='checkbox' checked={formValues.checkbox} onChange={handleChange} />
                                        <span className='checkmark'></span>
                                    </div>
                                    <p>
                                        I accept the <span className='primary-color-text'>Terms & conditions</span>
                                    </p>
                                </div>

                                <div className='btn'>
                                    <button type='submit' disabled={!formValues.checkbox}>
                                        Signup
                                    </button>
                                </div>
                            </form>

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

export default Index;
