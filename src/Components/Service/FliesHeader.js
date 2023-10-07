import React, { useEffect } from 'react';

const FliesHeader = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div className='bg-dark py-5 px-5 my-5 text-light'>
            <h1>Fly Pest Control Services</h1>
        </div>
    );
};

export default FliesHeader;