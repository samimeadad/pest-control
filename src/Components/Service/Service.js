import React from 'react';
import { Container } from 'react-bootstrap';
import HomeService from '../Home/HomeService';

const Service = () => {
    return (
        <Container className='text-center overflow-hidden my-5'>
            <HomeService></HomeService>
        </Container>
    );
};

export default Service;