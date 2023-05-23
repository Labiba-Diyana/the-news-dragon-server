/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProviders';


const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error =>{
            console.log(error)
        })
    }

    
    return (
        <Container>
            <Navbar style={{backgroundColor: "#F3F3F3"}} collapseOnSelect expand="lg"  variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto text-decoration-none text-secondary">
                            <Link className='text-decoration-none text-secondary me-3' to="/">Home</Link>
                            <Link className='text-decoration-none text-secondary me-3'>About</Link>
                            <Link className='text-decoration-none text-secondary'>Career</Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#deets">
                                <FaUserCircle className='mt-1' style={{ fontSize: '2rem' }}></FaUserCircle>
                            </Nav.Link>
                            }
                            {
                                user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                                    : <Link to="/login">
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;