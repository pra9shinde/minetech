import React from 'react';
import './user.css';

import fbImg from '../../assets/images/fb.svg';
import googleImg from '../../assets/images/google.svg';
import twitterImg from '../../assets/images/twitter.svg';

const index = ({ name, dob }) => {
    const convertToDate = (dateString) => {
        //  Convert a "dd/MM/yyyy" string into a Date object
        let d = dateString.split('/');
        let dat = new Date(d[2] + '/' + d[1] + '/' + d[0]);
        return dat.toDateString();
    };

    return (
        <aside className='profile-card'>
            <div className='mask-shadow' />
            <div className='display-img'>
                <a href='#'>
                    <img alt='profile' src='https://en.gravatar.com/userimage/42992842/b8e8ff24d6f1cb84bbe5c839903086bb.png?size=200' />
                </a>
            </div>
            <header>
                <h1>{name}</h1>
                <h2>DOB - {`${convertToDate(dob)}`}</h2>
            </header>
            <div className='profile-bio'>
                <p>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat, quo corporis facere quaerat quos beatae at cum vero
                    minus, quis quibusdam eum labore! Sed corporis quibusdam quasi nisi quos?"
                </p>
            </div>
            <ul className='profile-social-links'>
                <li>
                    <a href='/'>
                        <img alt='fb' src={fbImg} />
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <img alt='google' src={googleImg} />
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <img alt='amazon' src={twitterImg} />
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default index;
