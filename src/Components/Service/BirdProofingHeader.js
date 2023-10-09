import React, { useEffect } from 'react';

const BirdProofingHeader = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div className='bg-dark py-5 px-5 my-5 text-light text-center'>
            <h1>Bird Proofing</h1>
        </div>
    );
};

export default BirdProofingHeader;