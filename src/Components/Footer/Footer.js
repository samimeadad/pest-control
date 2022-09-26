import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

//component for footer
const Footer = () => {
    return (
        <footer className="bg-dark text-light p-5">
            <div className="text-center mb-3">
                <img style={ { width: '150px' } } src={ logo } alt="logoImage" />
            </div>
            <div className="container mb-5">
                <h5 className="text-justify text-dark text-center">
                    A happy home is everyone's dream, but keeping pests out of it is the biggest challenge. Please get in touch with us to make your home pest-free. Let us protect you from the pests that can carry harmful diseases and cause property damage.
                </h5>
            </div>
            <Container className='my-5'>
                <Row>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <h3 className="text-light mb-5 fw-bold text-center">About Global Pest Control</h3>
                        <p className="text-justify text-light ms-3">With our amazing local services available around the clock, we are proud to be able to provide them to our customers! Please call or email our dedicated and helpful customer service team anytime if you need assistance or advice! In order to give you peace of mind, we offer an emergency response service in addition to our quick response service, so you never have to worry!</p>
                    </Col>

                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 } className="text-center">
                        <h3 className="text-light mb-5 fw-bold">Our Locations</h3>
                        <p>
                            <span>Dhaka</span>
                            <br />
                            <span>Sylhet</span>
                            <br />
                            <span>Chittagong</span>
                            <br />
                            <span>Rajshahi</span>
                            <br />
                            <span>Khulna</span>
                            <br />
                            <span>Rangpur</span>
                        </p>
                    </Col>

                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 } className="text-center">
                        <h3 className="text-light mb-5 fw-bold">Our Services</h3>
                        <p>
                            <span>Wasps & Bees Nests</span>
                            <br />
                            <span>Rodents</span>
                            <br />
                            <span>Cockroaches</span>
                            <br />
                            <span>Flies</span>
                            <br />
                            <span>Bird Proofing</span>
                            <br />
                            <span>Fleas</span>
                        </p>
                    </Col>
                </Row>
            </Container>
            <p className="mt-5 text-center">
                <Link to={ { pathname: "https://www.facebook.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-facebook text-danger me-3" data-toggle="tooltip" title="Facebook"></i></Link>
                <Link to={ { pathname: "https://www.twitter.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-twitter text-danger me-3" data-toggle="tooltip" title="Twitter"></i></Link>
                <Link to={ { pathname: "https://www.linkedin.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-linkedin text-danger me-3" data-toggle="tooltip" title="Linkedin"></i></Link>
                <Link to={ { pathname: "https://www.instagram.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fab fa-instagram text-danger me-3" data-toggle="tooltip" title="Github"></i></Link>
                <Link to={ { pathname: "https://www.youtube.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fab fa-youtube text-danger me-3" data-toggle="tooltip" title="Github"></i></Link>
            </p>
            <p className="text-light text-center fs-6"><small className='fw-bold'>Copyright &copy; { ( new Date().getFullYear() ) } Global Pest Control</small></p>
        </footer>
    );
};

export default Footer;