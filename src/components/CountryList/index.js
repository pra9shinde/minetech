import React, { useState, useEffect } from 'react';
import './countrylist.css';
import Heading from '../Heading';
import LeftBanner from '../LeftBanner';
import worldImg from '../../assets/images/world.svg';
import Flag from '../Flag';

const Index = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();

        return () => {};
    }, []);

    const getCountries = async () => {
        try {
            const req = await fetch('http://test.oye.direct/players.json');
            if (req.status === 200) {
                const result = await req.json();
                const contr = Object.keys(result);
                contr.sort();
                setCountries(contr);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className='main-container'>
                <Heading title='Countries' />
                <div className='login-signup-container'>
                    <LeftBanner img={worldImg} />
                    <div className='login-signup__right'>
                        <div className='country-list'>
                            {countries.map((country, i) => (
                                <Flag key={i} flag={require(`../../assets/images/flags/${country.replace(/\s/g, '')}.svg`)} countryName={country} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
