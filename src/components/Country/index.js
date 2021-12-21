import React from 'react';
import './country.css';
const Flag = ({ flag, countryName }) => {
    return (
        <div className='flag'>
            <div className='flag-img'>
                <img src={flag} alt='' />
            </div>
            <h2>{countryName}</h2>
        </div>
    );
};

export default Flag;
