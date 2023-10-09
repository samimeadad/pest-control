import React, { useEffect } from 'react';

const FleasHeader = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div className='bg-dark py-5 px-5 my-5 text-light text-center'>
            <h1>Fleas Pest Control Services</h1>
        </div>
    );
};

export default FleasHeader;