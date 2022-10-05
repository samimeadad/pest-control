import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const HomeTelephone = () => {
    return (
        <div className='text-center bg-danger p-3'>
            <h4 className='text-light fw-bold'>Call us for a quote today</h4>
            <h1><FontAwesomeIcon className="text-light" icon={ faPhoneVolume } /> <a className="text-decoration-none text-light fw-bold" href="tel: +4407728957714">: 07728957714</a></h1>
        </div>
    );
};

export default HomeTelephone;