import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.png"
import HomeTelephone from '../Home/HomeTelephone';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header className='header overflow-hidden'>
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ms-3' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Navbar.Brand className='d-flex align-items-center mx-5'>
                            <div className='me-3'>
                                <NavLink to="/" className="me-5">
                                    <img className='img-fluid' style={ { width: '150px' } } src={ logo } alt="logoImage" />
                                </NavLink>
                            </div>
                            <div>
                                <h1 className='me-5 text-success'>Global Pest Control</h1>
                            </div>
                        </Navbar.Brand>
                        <Nav className="ms-5">
                            <NavLink className="me-4 text-success text-decoration-none btn btn-light" to="/home"><h3>Home</h3></NavLink>
                            <NavLink className="me-4 text-success text-decoration-none btn btn-light" to="/about"><h3>About</h3></NavLink>
                            <NavLink className="me-4 text-success text-decoration-none btn btn-light" to="/service"><h3>Services</h3></NavLink>
                            <NavLink className="me-4 text-success text-decoration-none btn btn-light" to="/contact"><h3>Contact</h3></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
            <div className='text-center bg-danger p-3'>
                <h1 className='text-light fw-bold'>Call Now</h1>
                <h1><FontAwesomeIcon className="text-light" icon={ faPhoneVolume } /> <a className="text-decoration-none text-light fw-bold" href="tel: +4407728957714"> : 07728957714</a></h1>
            </div>
        </header>
    );
};

export default Header;