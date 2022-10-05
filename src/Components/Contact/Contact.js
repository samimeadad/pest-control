import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className='my-5 text-center overflow-hidden'>
            <Row className='g-5'>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <Card className="bg-dark h-100 text-light">
                        <Card.Header><h2 className='fw-bold'>Email</h2></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <a href="mailto:ac.globalpestcontrol@gmail.com" className='text-decoration-none'><h4>ac.globalpestcontrol@gmail.com</h4></a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <Card className="bg-secondary h-100 text-light">
                        <Card.Header><h2 className='fw-bold'>Address</h2></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <h4>Global Pest Control, 78 Wilfrid Road, Hove, BN3 7FL, East Sussex, UK</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <Card className="bg-danger h-100 text-light">
                        <Card.Header><h2 className='fw-bold'>Telephone</h2></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <a className="text-decoration-none text-light fw-bold" href="tel: +4407728957714"><h4>+4407728957714</h4></a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
};

export default Contact;