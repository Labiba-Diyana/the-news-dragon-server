/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Login = () => {
    const {singInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('hagu location:' , location);
    const from = location?.state?.form?.pathname || '/category/0';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        singInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                navigate(from, { replace: true })
                
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className='py-5'>
            <Form onSubmit={handleLogin} className='w-50 mx-auto my-5 bg-white p-5'>
                <h4 className='text-center mb-5 fs-2 fw-bold'>Login your account</h4>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label className='fs-5 fw-bolder'>Email address</Form.Label>
                    <Form.Control style={{backgroundColor: "#F3F3F3"}} className='py-3' type="email" name="email" placeholder="Enter your email address" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-5 fw-bolder'>Password</Form.Label>
                    <Form.Control style={{backgroundColor: "#F3F3F3"}} className='py-3' type="password" name="password" placeholder="Enter your password" required />
                </Form.Group>
                <Button variant="dark" className='w-100 py-3 my-3 fw-bolder' type="submit">
                    Login
                </Button>
                <Form.Text className="text-dark d-block text-center mb-2">
                    Don't Have An Account ?  
                    <Link className='text-decoration-none text-danger ms-2 ' to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-danger d-block">
                    We'll never share your email with anyone else.
                </Form.Text>
                <Form.Text className="text-success d-block">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;