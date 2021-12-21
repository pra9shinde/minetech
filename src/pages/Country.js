import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Country from '../components/Country';

const CountryPage = () => {
    let { countryId } = useParams();
    console.log(countryId);
    return (
        <>
            <Header shadow />
            <Country countryId={countryId} />
        </>
    );
};

export default CountryPage;
