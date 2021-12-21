import React from 'react';
import './users.css';
import User from '../User';

const index = () => {
    return (
        <div className='main-container'>
            <div className='users'>
                <div class='heading'>
                    <h1>Users</h1>
                </div>
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
