import React from 'react';
import './users.css';
import User from '../User';
import Heading from '../Heading';

const index = () => {
    const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};

    return (
        <div className='main-container'>
            <div className='users'>
                <Heading title='Users' />
                <div className='users__container'>
                    {Object.keys(users).length === 0 && <h2>No Users</h2>}
                    {Object.keys(users).map((user, i) => (
                        <User key={i} name={users[user].name} dob={users[user].dob} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default index;
