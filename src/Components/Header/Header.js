import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo2.png';
import './Header.css'

const Header = () => {
    return (


        <Navbar collapseOnSelect expand="md" bg="white" variant="white" sticky="top">
            <Container fluid>
            <Navbar.Brand >
               <Link to="/"> <img className="logo" src={logo} alt="" /></Link>
            </Navbar.Brand>

            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto align-items-center">


                </Nav>
                <Nav>
                    <Nav.Link href="#">
                        <Button className='loginButton' variant="white">Login</Button>
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#">
                        <Button className='signUp' variant="danger">Sign Up</Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>




    );
};

export default Header;


