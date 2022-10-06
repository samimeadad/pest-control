import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../images/banner/1.jpg';
import banner2 from '../../images/banner/2.jpg';
import banner3 from '../../images/banner/3.jpg';
import emailjs from '@emailjs/browser';


const ImageSlider = () => {
    const [ index, setIndex ] = useState( 0 );

    const handleSelect = ( selectedIndex, e ) => {
        setIndex( selectedIndex );
    };

    const [ success, setSuccess ] = useState( false );
    const [ successMessage, setSuccessMessage ] = useState( '' );
    const [ error, setError ] = useState( '' );

    const sendEmail = ( e ) => {
        e.preventDefault();
        emailjs.sendForm( 'service_oxl5ci5', 'template_p17s82b', e.target, 'user_NTt1KPYzFQZfll2DEFxve' )
            .then( ( result ) => {
                setSuccess( true );
                setSuccessMessage( "Thank you, your message has been sent and a member of our team will be in touch soon." );
            }, ( error ) => {
                setSuccess( false );
                setError( error.text );
            } );
        e.target.reset();
    };

    return (
        <div className='my-5 overflow-hidden'>
            <Row className='g-5 overflow-hidden'>
                <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                    <div className='text-center'>
                        <h1>image</h1>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <Carousel activeIndex={ index } onSelect={ handleSelect } className="text-center overflow-hidden">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={ banner1 }
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={ banner2 }
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={ banner3 }
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                    <div className='text-center my-4 overflow-hidden'>
                        <h2 className='fw-bold text-success mb-3'>Get A Free Quote</h2>
                        {
                            success ? <h6 className="text-success">{ successMessage }</h6> : <h4 className="text-danger">{ error }</h4>
                        }
                        <Form onSubmit={ sendEmail } className="form w-75 mx-auto overflow-hidden">
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="text" placeholder="Name" name='name' required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Control type="text" placeholder="Phone" name='phone' required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" name='email' required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='fw-bold'>Please Write Your Address Below</Form.Label>
                                <Form.Control as="textarea" rows={ 5 } name='message' required />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Get A Quote
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ImageSlider;