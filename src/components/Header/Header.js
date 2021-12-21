import React from 'react';
import './header.css';

const Header = ({ shadow }) => {
    return (
        <div className={`header ${shadow && 'shadow'}`}>
            <div className='header__container'>
                <div className='left'>
                    <h1 className='header__logo'>MINETECH</h1>
                </div>
                <div className='right'>
                    <ul>
                        <li className='active'>
                            <a>Users</a>
                        </li>
                        <li>
                            <a>Countries</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
