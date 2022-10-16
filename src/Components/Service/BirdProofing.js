import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Row } from 'react-bootstrap';
import bird1 from '../../images/service/main/bird1.jpg';
import bird2 from '../../images/service/main/bird2.jpg';
import bird3 from '../../images/service/main/bird3.jpg';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const BirdProofing = () => {
    return (
        <div className='w-100 overflow-hidden'>
            <Container className='text-center overflow-hidden'>
                <div className='my-5 overflow-hidden text-success'>
                    <h1 className='my-2'>Bird Proofing Pest Control Experts</h1>
                    <h3>Our Technicians are based throughout the country and aim to be with you within 4 hours of your call.</h3>
                </div>
                <div className='my-5 overflow-hidden'>
                    <Row className='g-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                            <img src={ bird1 } alt="bird2" className='img-fluid' />
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                            <p className='text-start'>
                                At Global Pest Control, we provide a non-lethal alternative bird control service for those who need their premises bird proofing. Our expert and holistic approach to bird proofing ensures that absolutely no harm is caused to the intended pest species.
                            </p>
                            <p className='text-start'>
                                Due to years of experience, the bird proofing team at Global Pest Control can provide customers with an aesthetic finish that prevents birds from re-infesting your property. From buildings and statues to air ducts and other items, Global Pest Control have the skills and expertise to bird proof whatever you require. No matter the establishment or environment, whether it’s domestic or commercial, Global Pest Control are here to assist you if you need to remove birds that are feeding, nesting or roosting within your premises.
                            </p>
                            <p className='text-start'>
                                No matter where you live, birds can be a pest, rather than a pleasure. Aggressive seagulls on the coast, pigeons in the city and even cheeky magpies can play havoc with homes and businesses in a variety of ways.
                            </p>
                            <p className='text-start'>
                                This is a problem that affects people all over the UK, so it’s important that we are able to control birds when their behaviour becomes a nuisance.
                            </p>
                            <p className='text-start text-danger'>
                                <Button variant='danger' className='p-3'><h4><FontAwesomeIcon className="text-light" icon={ faPhoneVolume } /> <a className="text-decoration-none text-light fw-bold" href="tel: +4407728957714"> : 077 2895 7714</a></h4></Button>
                            </p>
                        </Col>
                    </Row>
                </div>
                <div className='my-5 overflow-hidden'>
                    <Row className='g-5 my-5'>
                        <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                            <h3 className='text-start mb-4'>Methods of Deterrent</h3>
                            <p className='text-start'>
                                All materials that are used on site are professional quality, specific to the job at hand and made from the best components on the market. We regularly supply and fit the highest standard:
                            </p>
                            <p className='text-start'>
                                <ul>
                                    <li className='my-2'>
                                        <p className='text-start text-dark my-3'>Removal of breeding sites.</p>
                                    </li>
                                    <li className='my-2'>
                                        <p className='text-start text-dark my-3'>Installation of fly screens.</p>
                                    </li>
                                    <li className='my-2'>
                                        <p className='text-start text-dark my-3'>Install Electric Fly Killer machines.</p>
                                    </li>
                                    <li className='my-2'>
                                        <p className='text-start text-dark my-3'>Installation of insect proofing products.</p>
                                    </li>
                                </ul>
                            </p>
                            <p className='text-start text-danger'>
                                <Link to="/contact" className='text-decoration-none text-light'><Button variant='success' className='py-2 my-3'><h5>Get Quote</h5></Button></Link>
                            </p>
                        </Col>
                        <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                            <img src={ bird2 } alt="bird2" className='img-fluid' />
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className='w-100 overflow-hidden text-center bg-success text-light my-5'>
                <h2 className='mt-5'>Don’t let birds spoil your fun</h2>
                <h2>Call Global Pest Control today for a free quote and to arrange an appointment</h2>
                <Button variant='light' className='p-3 my-5'><h4><FontAwesomeIcon className="text-danger" icon={ faPhoneVolume } /> <a className="text-decoration-none text-danger fw-bold" href="tel: +4407728957714"> : 07728957714</a></h4></Button>
            </div>
            <Container className='text-center overflow-hidden my-5'>
                <Row className='g-5 my-5'>
                    <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                        <img src={ bird3 } alt="bird3" className='img-fluid' />
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
                        <h3 className='text-start mt-4'>Safety and Access are Our Priorities</h3>
                        <p className='text-start my-5'>
                            Global Pest Control, our highly-trained team are both experienced and qualified in this specialised area of pest control. In order to ensure that the job is carried out as safely as possible, we have a number of different options and methods available. This versatility also means we can be cost-effective, with training at height certification, IPAF and PASMA qualifications our team will determine the best way to access your trouble spots. For more information on our bird proofing service, get in touch today.
                        </p>
                        <p className='text-start text-danger my-5'>
                            <Link to="/contact" className='text-decoration-none text-light'><Button variant='success' className='py-2'><h4>Get Quote</h4></Button></Link>
                        </p>
                    </Col>
                </Row>
            </Container>
            <ScrollToTop smooth />
        </div>
    );
};

export default BirdProofing;