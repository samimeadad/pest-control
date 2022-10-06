import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Telephone = () => {
    return (
        <div className='bg-light p-5 mt-5 overflow-hidden'>
            <Container className='overflow-hidden'>
                <Row className='g-5 overflow-hidden'>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <h5 className='text-danger fw-bold mt-4 text-center'>ac.globalpestcontrol@gmail.com</h5>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <div className='overflow-hidden text-center'>
                            <Button variant='danger' className='p-3 text-center'>
                                <h1><FontAwesomeIcon className="text-light" icon={ faPhoneVolume } /> <a className="text-decoration-none text-light fw-bold" href="tel: +4407728957714">: 07728957714</a></h1>
                            </Button>
                        </div>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <h5 className='text-danger fw-bold mt-3 text-center'>Global Pest Control, 78 Wilfrid Road, Hove, BN3 7FL, East Sussex, UK</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Telephone;