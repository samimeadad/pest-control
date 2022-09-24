import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';

//component for footer
const Footer = () => {
    return (
        <footer className="bg-info pb-3">
            <div className="text-center">
                <img style={ { width: '100px' } } src={ logo } alt="logoImage" />
            </div>
            <div className="container mb-5">
                <p className="text-justify text-dark">
                    DreamBaby Fertility Center has centralized laboratory facilities for all those IVF specialists who wish to treat their patients in a hi-tech environment. The facility offers the specialists complete control over their patient’s procedures. A totally independent and sophisticated environment helps in delivering unparalleled success.
                </p>
            </div>
            <div className="container">
                <Row>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <h3 className="text-danger mb-5 fw-bold text-center">About DreamBaby</h3>
                        <p className="text-justify text-dark ms-3">Our Clinic has grown to provide a world class facility for the advanced infertility treatment.</p>
                        <p className="text-justify text-dark ms-3">We are among the most qualified implant providers in Bangladesh with over 30 years of quality treatment and experience.</p>
                    </Col>

                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 } className="text-center">
                        <h3 className="text-danger mb-5 fw-bold">Our Locations</h3>
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
                        <h3 className="text-danger mb-5 fw-bold">Our Services</h3>
                        <p>
                            <span>Azoospermia</span>
                            <br />
                            <span>IVF - In Vitro Fertilization</span>
                            <br />
                            <span>IUI</span>
                            <br />
                            <span>ICSI</span>
                            <br />
                            <span>IMSI</span>
                            <br />
                            <span>Surrogacy</span>
                        </p>
                    </Col>
                </Row>
            </div>
            <p className="mt-5 text-center">
                <Link to={ { pathname: "https://www.facebook.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-facebook text-danger me-3" data-toggle="tooltip" title="Facebook"></i></Link>
                <Link to={ { pathname: "https://www.twitter.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-twitter text-danger me-3" data-toggle="tooltip" title="Twitter"></i></Link>
                <Link to={ { pathname: "https://www.linkedin.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-linkedin text-danger me-3" data-toggle="tooltip" title="Linkedin"></i></Link>
                <Link to={ { pathname: "https://www.instagram.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fab fa-instagram text-danger me-3" data-toggle="tooltip" title="Github"></i></Link>
                <Link to={ { pathname: "https://www.youtube.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fab fa-youtube text-danger me-3" data-toggle="tooltip" title="Github"></i></Link>
            </p>
            <p className="text-secondary text-center fs-6"><small>&copy;DreamBaby Fertility Center</small></p>
        </footer>
    );
};

export default Footer;