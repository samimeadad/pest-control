import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.png"

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <div className='d-flex justify-content-between align-items-center'>
                    <Navbar.Brand>
                        <div className='d-flex justify-content-around align-items-center mx-5'>
                            <NavLink to="/home" className="me-5">
                                <img className='img-fluid' style={ { width: '100px' } } src={ logo } alt="logoImage" />
                            </NavLink>
                            <h2 className='me-5 text-success'>Global Pest Control</h2>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-5">
                            <NavLink className="me-4 text-success text-decoration-none" to="/home"><h3>Home</h3></NavLink>
                            <NavLink className="me-4 text-success text-decoration-none" to="/about"><h3>About Us</h3></NavLink>
                            <NavLink className="me-4 text-success text-decoration-none" to="/service"><h3>Our Services</h3></NavLink>
                            <NavLink className="me-4 text-success text-decoration-none" to="/contact"><h3>Contact Us</h3></NavLink>
                        </Nav>
                        <Nav className="mx-5 text-danger">
                            <h2>Call Us: 07728957714</h2>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header>
    );
};

export default Header;