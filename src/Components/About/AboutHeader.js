import React from 'react';

const AboutHeader = () => {
    return (
        <div>
            <div className='bg-dark py-5 px-5 text-light'>
                <h1>About Us</h1>
            </div>
            <div>
                <h4 className='bg-danger p-3 fw-bold text-light text-center'>The crews at <span className='fw-bold text-warning'>Global Pest Control</span> follow the guidelines set forth by the government regarding <span className='text-warning'>PEST CONTROL</span>. Due to our extensive experience in pest control, we value attention to detail and professionalism. Shield your home from pests with all-natural diatomaceous earth products</h4>
            </div>
        </div>
    );
};

export default AboutHeader;