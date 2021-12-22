import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import './header.css';

const Header = ({ shadow }) => {
    const [user, setUser] = useContext(AuthContext);

    const logout = () => {
        localStorage.removeItem('usersToken');
        setUser(null);
    };

    return (
        <div className={`header ${user ? 'shadow' : ''}`}>
            <div className='header__container'>
                <div className='left'>
                    <NavLink to='/'>
                        <h1 className='header__logo'>MINETECH</h1>
                    </NavLink>
                </div>
                <div className='right'>
                    {user && (
                        <ul>
                            <li>
                                <NavLink
                                    to='/'
                                    style={({ isActive }) => ({
                                        color: isActive ? '#012a93' : '#000',
                                    })}
                                >
                                    Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/country'
                                    style={({ isActive }) => ({
                                        color: isActive ? '#012a93' : '#000',
                                    })}
                                >
                                    Countries
                                </NavLink>
                            </li>
                            <li>
                                <a onClick={logout}>Logout</a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
