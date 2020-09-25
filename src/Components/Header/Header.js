import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext, UserContext } from '../../App';
import logo from '../../Images/logo2.png';
import './Header.css'
import cartLogo from './Path 1.png';

const Header = () => {

    const [cart]=useContext(CartContext)
    const [user,setUser]=useContext(UserContext)
    const totalFood=cart.reduce((sum,foodDetails)=>sum+foodDetails.count,0)


    return (


        <Navbar collapseOnSelect expand="md" bg="white" variant="light" sticky="top">
            <Container fluid>
            <Navbar.Brand >
               <Link to="/"> <img className="logo" src={logo} alt="" /></Link>
            </Navbar.Brand>

            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto align-items-center">


                </Nav>
                <Nav>


                    <Nav.Link>
                       
                          <Link to="/checkout">
                          <Button variant="transparent m-0 p-0"> 
                               <h6 className='m-0 p-0'>{totalFood}</h6>
                                    <img  src={cartLogo} alt=""/>
                           </Button>
                          </Link>
                           
                         
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


