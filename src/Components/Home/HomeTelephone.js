import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const HomeTelephone = () => {
    return (
        <div>
            <div>
                <h4 className='bg-light p-3 fw-bold text-danger text-center'>The crews at <span className='fw-bold text-warning'>Global Pest Control</span> follow the guidelines set forth by the government regarding <span className='text-warning'>PEST CONTROL</span>. Due to our extensive experience in pest control, we value attention to detail and professionalism. Shield your home from pests with all-natural diatomaceous earth products</h4>
            </div>
            <div className='text-center bg-danger p-3'>
                <h4 className='text-light fw-bold'>Call us for a quote today</h4>
                <h1><FontAwesomeIcon className="text-light" icon={ faPhoneVolume } /> : <a className="text-decoration-none text-light fw-bold" href="tel: +4407728957714">07728957714</a></h1>
            </div>
        </div>
    );
};

export default HomeTelephone;