import React from 'react';
import loginImg from '../../assets/images/login.png';

const index = () => {
    return (
        <div className='login-signup-left'>
            <div className='login__image'>
                <img src={loginImg} alt='Minetech Login' />
            </div>
        </div>
    );
};

export default index;
