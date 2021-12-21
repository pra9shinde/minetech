import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ shadow }) => {
    return (
        <div className={`header ${shadow ? 'shadow' : ''}`}>
            <div className='header__container'>
                <div className='left'>
                    <h1 className='header__logo'>MINETECH</h1>
                </div>
                <div className='right'>
                    <ul>
                        <li className='active'>
                            <Link to='/'>Users</Link>
                        </li>
                        <li>
                            <Link to='/country'>Countries</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
