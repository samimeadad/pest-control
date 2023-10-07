import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ScrollToTop from 'react-scroll-to-top';
import HomeService from '../Home/HomeService';
import ServiceText from './ServiceText';

const Service = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <Container className='text-center overflow-hidden my-5'>
            <ServiceText />
            <HomeService></HomeService>
            <ScrollToTop smooth />
        </Container>
    );
};

export default Service;