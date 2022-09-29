import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const Telephone = () => {
    return (
        <div className='text-center bg-light p-3 my-3'>
            <h4 className='text-danger fw-bold'>Call us for a quote today</h4>
            <h1><FontAwesomeIcon className="text-dark" icon={ faPhoneVolume } /> : <a className="text-decoration-none text-dark fw-bold" href="tel: +4407728957714">07728957714</a></h1>
            <h6 className='fw-bold'>Or</h6>
            <h4 className='text-danger fw-bold'>Visit Us:</h4>
            <h5>Global Pest Control, 78 Wilfrid Road, Hove, BN3 7FL, East Sussex, UK</h5>
        </div>
    );
};

export default Telephone;