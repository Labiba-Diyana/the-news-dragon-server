/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                // console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <Container className='py-5'>
            <Form onSubmit={handleRegister} className='w-50 mx-auto my-5 bg-white p-5'>
                <h4 className='text-center mb-5 fs-2 fw-bold'>Register your account</h4>
                <Form.Group className="mb-3 " controlId="formBasicName">
                    <Form.Label className='fs-5 fw-bolder'>Your Name</Form.Label>
                    <Form.Control style={{ backgroundColor: "#F3F3F3" }} className='py-3' type="text" name="name" placeholder="Enter your name" required />

                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicPhoto">
                    <Form.Label className='fs-5 fw-bolder'>Photo URL</Form.Label>
                    <Form.Control style={{ backgroundColor: "#F3F3F3" }} className='py-3' type="text" name="photo" placeholder="Enter your password" required />

                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label className='fs-5 fw-bolder'>Email address</Form.Label>
                    <Form.Control style={{ backgroundColor: "#F3F3F3" }} className='py-3' type="email" name="email" placeholder="Enter your email address" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-5 fw-bolder'>Password</Form.Label>
                    <Form.Control style={{ backgroundColor: "#F3F3F3" }} className='py-3' type="password" name="password" placeholder="Enter your password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} className='text-secondary mb-4' 
                    type="checkbox" 
                    name='accept' 
                    label={<>Accept <Link className='text-decoration-none text-danger ms-2 ' to="/terms">Term & Conditions</Link></>} />
                </Form.Group>
                <Button variant="dark" disabled={!accepted} className='w-100 py-3 mb-3 fw-bolder' type="submit">
                    Register
                </Button>
                <Form.Text className="text-dark d-block text-center mb-2">
                    Already Have An Account ?
                    <Link className='text-decoration-none text-danger ms-2 ' to="/login">Login</Link>
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

export default Register;