import React from 'react';
import './country.css';

import Heading from '../Heading';
import LeftBanner from '../LeftBanner';
import worldImg from '../../assets/images/cricket.png';
import sortImg from '../../assets/images/sort.png';

const Index = ({ countryId }) => {
    return (
        <div className='main-container'>
            <Heading title={countryId} />
            <div className='login-signup-container'>
                <div className='cricket-img'>
                    <LeftBanner img={worldImg} />
                </div>
                <div className='login-signup__right'>
                    <div className='players'>
                        <div className='table'>
                            <table>
                                <thead>
                                    <th>
                                        <div className='theader'>
                                            <span>Name</span> <img src={sortImg} alt='' />
                                        </div>
                                    </th>
                                    <th>
                                        <div className='theader'>
                                            <span>Surname</span> <img src={sortImg} alt='' />
                                        </div>
                                    </th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Pranav</td>
                                        <td>Shinde</td>
                                    </tr>
                                    <tr>
                                        <td>Pranav</td>
                                        <td>Shinde</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
