import React from 'react';
import { Container } from 'react-bootstrap';
import ScrollToTop from 'react-scroll-to-top';
import HomeService from '../Home/HomeService';

const Service = () => {
    return (
        <Container className='text-center overflow-hidden my-5'>
            <HomeService></HomeService>
            <ScrollToTop smooth />
        </Container>
    );
};

export default Service;