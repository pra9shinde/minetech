import React, { useState, useEffect } from 'react';
import './country.css';

import Heading from '../Heading';
import LeftBanner from '../LeftBanner';
import Players from '../Players';

import worldImg from '../../assets/images/cricket.png';

const Index = ({ countryId }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetchPlayers();
    }, []);

    const fetchPlayers = async () => {
        const req = await fetch('http://test.oye.direct/players.json');
        const list = await req.json();

        // Separate Name & Surname
        Object.keys(list).forEach((row) => {
            let cont = list[row];
            cont.forEach((element) => {
                const nameParts = element.name.split(' ');
                let name = nameParts[0] ? nameParts[0] : '-';
                let lastName = nameParts[1] ? nameParts[1] : '-';
                element.name = name;
                element.lastName = lastName;
            });
        });

        const key = convertIdToKey(countryId);
        if (list[key]) {
            setPlayers([...list[key]]);
        }
    };

    const convertIdToKey = (url) => {
        const temp = countryId.replace(/-/g, ' ');
        return temp.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
    };

    return (
        <div className='main-container'>
            <Heading title={countryId} />
            <div className='login-signup-container countries'>
                <div className='cricket-img'>
                    <LeftBanner img={worldImg} />
                </div>
                <div className='login-signup__right'>
                    <Players players={players} />
                </div>
            </div>
        </div>
    );
};

export default Index;
