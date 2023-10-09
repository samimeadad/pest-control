import React, { useEffect } from 'react';

const RodentHeader = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div className='bg-dark py-5 px-5 my-5 text-light text-center'>
            <h1>Expert Rodent Removal</h1>
        </div>
    );
};

export default RodentHeader;