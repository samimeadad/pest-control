import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import banner2 from '../../images/banner/2.jpg';
import banner3 from '../../images/banner/3.jpg';
import banner4 from '../../images/banner/4.jpg';
import banner5 from '../../images/banner/5.jpg';
import banner6 from '../../images/banner/6.jpg';
import banner7 from '../../images/banner/7.jpg';
import banner8 from '../../images/banner/8.jpg';
import banner9 from '../../images/banner/9.jpg';
import background from '../../images/background/blur-background.jpg'
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
        <div className='w-100 overflow-hidden p-5' style={ { backgroundImage: `url(${ background })`, backgroundSize: "cover", overflow: 'hidden' } }>
            <Row className='overflow-hidden g-5'>
                <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                    <div className='text-center ms-4 mt-5'>
                        <h1 className='text-start text-light fw-bold fs-1 my-3'>Global Pest Control</h1>
                        <h1 className='text-start text-warning fw-bold fs-1 my-3'>For A Pest-Free Home</h1>
                        <h1 className='text-start text-light fw-bold fs-1 my-3'>Pest Termination To Perfection</h1>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                    <Carousel activeIndex={ index } onSelect={ handleSelect } className="text-center overflow-hidden">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={ banner3 }
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
                                src={ banner4 }
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={ banner2 }
                                alt="Fourth slide"
                            />
                            <Carousel.Caption>
                                <h3>Fourth slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={ banner5 }
                                alt="Fifth slide"
                            />
                            <Carousel.Caption>
                                <h3>Fifth slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={ banner6 }
                                alt="Sixth slide"
                            />
                            <Carousel.Caption>
                                <h3>Sixth slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={ banner7 }
                                alt="Seventh slide"
                            />
                            <Carousel.Caption>
                                <h3>Seventh slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={ banner8 }
                                alt="Eighth slide"
                            />
                            <Carousel.Caption>
                                <h3>Eighth slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={ banner9 }
                                alt="Ninth slide"
                            />
                            <Carousel.Caption>
                                <h3>Ninth slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                    <div className='text-center my-2 overflow-hidden'>
                        <h2 className='fw-bold text-light mb-3'>Get A Free Quote</h2>
                        {
                            success ? <h6 className="text-light">{ successMessage }</h6> : <h6 className="text-danger">{ error }</h6>
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
                                <Form.Text className="text-light">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicService">
                                <Form.Select aria-label="service" placeholder="Select Service" name='service' required>
                                    <option>Select Service</option>
                                    <option value="Wasps & Bee Nest">Wasps & Bee Nest</option>
                                    <option value="Rodents">Rodents</option>
                                    <option value="Cockroaches">Cockroaches</option>
                                    <option value="Flies">Flies</option>
                                    <option value="Bird Proofing">Bird Proofing</option>
                                    <option value="Fleas">Fleas</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='fw-bold text-light'>Please Write Your Address Below</Form.Label>
                                <Form.Control as="textarea" rows={ 5 } name='message' required />
                            </Form.Group>
                            <Button variant="danger" type="submit" className='p-2'>
                                <h4 className='fw-bold'>Get A Quote</h4>
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ImageSlider;