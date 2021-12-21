import React from 'react';
import { Link } from 'react-router-dom';
import './country.css';
const Flag = ({ flag, countryName }) => {
    return (
        <Link to={`/country/${countryName.toLowerCase().replace(/\s/g, '-')}`}>
            <div className='flag'>
                <div className='flag-img'>
                    <img src={flag} alt='' />
                </div>
                <h2>{countryName}</h2>
            </div>
        </Link>
    );
};

export default Flag;
