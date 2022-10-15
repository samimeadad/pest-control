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
                    <div className='text-center mt-4'>
                        <h1 className='text-start text-light fw-bold fs-1 my-3'>Global Pest Control</h1>
                        <h1 className='text-start text-warning fw-bold fs-1 my-3'>For A Pest-Free Home</h1>
                        <h1 className='text-start text-light fw-bold fs-1 my-3'>Pest Termination To Perfection</h1>
                    </div>
                    <div className='text-center mt-4'>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Fast response from 60 minutes</h6>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; No call-out charge on completed work</h6>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Ethical Responsible Pest Control Solutions</h6>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Very competitive local rates</h6>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Preventive Surveys</h6>
                        <h6 className='text-start text-dark fw-bold my-3 p-2 bg-warning'>&#10004; Discreet engineers</h6>
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
                                <h3>Flies</h3>
                                <p>When an infestation of flies breaks out at your home, it is never a pleasant experience. From bites, to destroying your food and more, they need to be dealt with fast. ERG are on hand 7 days a week with a local pest controller on hand to apply the lasting treatment to your property!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={ banner4 }
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Rodents</h3>
                                <p>
                                    Rats, mice and even squirrels can cause major disruption to your home or business. Causing unsanitary conditions and even fire hazards, rodents need to be addressed ASAP. Our local team stock a number of traps that can help to remove mice and rats from your property. So, if you think you are living alongside rodents, give us a call!
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={ banner2 }
                                alt="Fourth slide"
                            />
                            <Carousel.Caption className='text-dark'>
                                <h3>Cockroaches</h3>
                                <p>
                                    From eating your food to spreading disease, cockroaches are strongly linked to unsanitary connotations. This is not something you can just let slide on your property. Our pest control team can clear up the cockroach infestation efficiently, with no mess and no more hassle. Get your free quote from us today!
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={ banner5 }
                                alt="Fifth slide"
                            />
                            <Carousel.Caption className='text-dark'>
                                <h3>Mosquitoes</h3>
                                <p>
                                    Our targeted mosquito pest control service combines the most advanced technology and methods available to help take back your home.
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
                                <h3>Wasps & Bees Nests</h3>
                                <p>
                                    Wasps nests and bee hives cause a constant issue for homeowners during the long summer months. Our local team are adept at providing quick and effective treatment that eliminates these nests in a matter of hours. Our wasp removal and bee treatment ensures you are free from the risk of stings and able to enjoy your garden in peace once again!
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
                                <h3>Fleas</h3>
                                <p>
                                    Once a flea infestation appears on your property, it can be a nightmare to deal with. Your high street flea bombs and other treatments are rarely effective. The only true way to deal with a flea infestation is to call in the professionals. We eliminate the fleas themselves, and their eggs, putting a stop to your flea problem for good!
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
                                <h3>Why Global Pest Control</h3>
                                <p>
                                    Global Pest Control is part of the renowned services provider brand, which means that we apply the same customer-service practices, high-quality standards and company’s principles of our service delivery process. Through innovative technology, modern online solutions and an all-round satisfaction approach, we make sure that customers and pest technicians alike have a fantastic service experience as an end result.
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
                                <h3>Our Soldiers</h3>
                                <p>
                                    We work with experts, who operate under the Global Pest Control brand through our franchise business model. They have a solid background in the pest control field and are fully certified and insured, in order to provide a high-quality service. The exterminators are trained and equipped to inspect, treat and proof residential properties and commercial buildings against various types of pests. The teams are on call even when you need a discreet assistance urgently and without delay.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                    <div className='text-center my-4 overflow-hidden'>
                        <h2 className='fw-bold text-light mb-3'>Get A Free Quote</h2>
                        {
                            success ? <h6 className="text-light">{ successMessage }</h6> : <h6 className="text-danger">{ error }</h6>
                        }
                        <Form onSubmit={ sendEmail } className="form w-100 mx-auto overflow-hidden">
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