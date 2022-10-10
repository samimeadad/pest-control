import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import ScrollToTop from 'react-scroll-to-top';

const Contact = () => {

    const [ success, setSuccess ] = useState( false );
    const [ successMessage, setSuccessMessage ] = useState( '' );
    const [ error, setError ] = useState( '' );

    const sendEmail = ( e ) => {
        e.preventDefault();
        emailjs.sendForm( 'service_ow93ivt', 'template_0bj3nlo', e.target, 'user_NTt1KPYzFQZfll2DEFxve' )
            .then( ( result ) => {
                setSuccess( true );
                setSuccessMessage( "Your message sent sent successfully. We'll get in touch soon." );
            }, ( error ) => {
                setSuccess( false );
                setError( error.text );
            } );
        e.target.reset();
    };

    return (
        <Container className='my-5 text-center overflow-hidden'>
            <h2 className="my-5 text-success">Thanks for taking the time to reach out. How may we help you today?</h2>
            {
                success ? <h4 className="text-success">{ successMessage }</h4> : <h4 className="text-danger">{ error }</h4>
            }
            <div className='my-5'>
                <Form onSubmit={ sendEmail } className="form w-75 mx-auto">
                    <Form.Group className="mb-3" controlId="formBasicSubject">
                        <Form.Control type="text" placeholder="Subject" name='subject' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Your Name" name='name' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter Your Email" name='email' required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='fw-bold'>Please Write Your Message Here</Form.Label>
                        <Form.Control as="textarea" rows={ 5 } name='message' required />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Send Message
                    </Button>
                </Form>
            </div>
            <hr className='my-5' />
            <Row className='g-5'>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <Card className="h-100 text-success">
                        <Card.Header><h2 className='fw-bold'>Email</h2></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <a href="mailto:ac.globalpestcontrol@gmail.com" className='text-decoration-none'><h4>ac.globalpestcontrol@gmail.com</h4></a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <Card className="h-100 text-danger">
                        <Card.Header><h2 className='fw-bold'>Address</h2></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <h4>Global Pest Control, 78 Wilfrid Road, Hove, BN3 7FL, East Sussex, UK</h4>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                    <Card className="h-100 text-dark">
                        <Card.Header><h2 className='fw-bold text-primary'>Telephone</h2></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <a className="text-decoration-none text-dark fw-bold" href="tel: +4407728957714"><h4 className='fw-bold text-success'>+4407728957714</h4></a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr className='my-5' />
            <ScrollToTop smooth />
        </Container >
    );
};

export default Contact;