import React from 'react';
import './users.css';
import User from '../User';
import Heading from '../Heading';

const index = () => {
    return (
        <div className='main-container'>
            <div className='users'>
                <Heading title='Users' />
                <div className='users__container'>
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                </div>
            </div>
        </div>
    );
};

export default index;
