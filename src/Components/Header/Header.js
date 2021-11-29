import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../image/gostudy-logo-dark.png'
import './Header.css'

const Header = () => {
    return (
        <div>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/home"> <img className="logo"src={logo} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto fs-5">
        
        <Link to="/home" className="items" >Home</Link>
        <Link to="/courses" className="items" >Courses</Link>
        <Link to="/about" className="items" >About Us</Link>
        <Link to="/contact" className="items" >Contact Us</Link>
        <Link to="/privacy" className="items" >Privacy Policy</Link>
        <i className="fas fa-search text-secondary  mt-3 ps-5"></i>
        <i className="fas fa-shopping-cart text-secondary mt-3 ps-3"></i>
        <button className="btn bg-white border ms-xxl-5 ps-3">LOGIN</button>
        <button className="btn bg-warning ms-3">SIGN UP</button>
        </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar> 
          
          </div>
        
    );
};

export default Header;