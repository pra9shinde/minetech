import React from 'react';

const index = ({ img }) => {
    return (
        <div className='login-signup-left'>
            <div className='login__image'>
                <img src={img} alt='Minetech Login' />
            </div>
        </div>
    );
};

export default index;
