import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../images/logo.png"
import { Button, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header className='header overflow-hidden text-center'>
            <div className='overflow-hidden text-center bg-light'>
                <Container className='overflow-hidden text-center'>
                    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='text-center'>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ms-3' />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Navbar.Brand className='d-flex align-items-center text-center'>
                                <div className='me-3 text-center'>
                                    <NavLink to="/" className="me-5">
                                        <img className='img-fluid' style={ { width: '150px' } } src={ logo } alt="logoImage" />
                                    </NavLink>
                                </div>
                                <div>
                                    <h1 className='text-success fw-bold'>Global Pest Control</h1>
                                </div>
                            </Navbar.Brand>
                            <Nav className="ms-auto">
                                <NavLink className="me-4 text-success text-decoration-none btn btn-light" to="/home"><h3 className='fw-bold'>Home</h3></NavLink>
                                <NavLink className="me-4 text-success text-decoration-none btn btn-light" to="/about"><h3 className='fw-bold'>About</h3></NavLink>
                                <NavLink className="me-4 text-success text-decoration-none btn btn-light" to="/service"><h3 className='fw-bold'>Services</h3></NavLink>
                                <NavLink className="me-4 text-success text-decoration-none btn btn-light" to="/contact"><h3 className='fw-bold'>Contact</h3></NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
            <div className='text-center p-3 overflow-hidden'>
                <h1 className='text-danger fw-bold'>Call Now</h1>
                <Button variant='danger' className='p-3'><h1><FontAwesomeIcon className="text-light" icon={ faPhoneVolume } /> <a className="text-decoration-none text-light fw-bold" href="tel: +4407728957714"> : 07728957714</a></h1></Button>
                <div className='mt-3'>
                    <p className="text-center">
                        <Link to={ { pathname: "https://www.facebook.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-facebook text-primary fw-bold me-3 fs-2" data-toggle="tooltip" title="Facebook"></i></Link>
                        <Link to={ { pathname: "https://www.twitter.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-twitter text-primary fw-bold me-3 fs-2" data-toggle="tooltip" title="Twitter"></i></Link>
                        <Link to={ { pathname: "https://www.youtube.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fab fa-youtube text-danger fw-bold me-3 fs-2" data-toggle="tooltip" title="Github"></i></Link>
                        <Link to={ { pathname: "https://www.linkedin.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-linkedin text-primary fw-bold me-3 fs-2" data-toggle="tooltip" title="Linkedin"></i></Link>
                        <Link to={ { pathname: "https://www.instagram.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fab fa-instagram text-primary fw-bold me-3 fs-2" data-toggle="tooltip" title="Github"></i></Link>
                    </p>
                </div>
            </div>
            <Container className='my-5 overflow-hidden'>
                <hr />
            </Container>
        </header>
    );
};

export default Header;