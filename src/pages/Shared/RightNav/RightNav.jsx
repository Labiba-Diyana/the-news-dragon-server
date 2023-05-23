/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div className='position-sticky top-0'>
            <h4 className='mt-5 mb-4'>Login With</h4>
            <Button className='mb-3 w-100' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
            <Button className='w-100' variant="outline-secondary"><FaGithub></FaGithub> Login with Github</Button>
            <div>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative text-center text-white'>
               <img className='w-100' src={bg} alt="" />
               <div className='position-absolute top-50 start-50 translate-middle p-0'>
                 <h2 className='fw-bolder'>Create an Amazing Newspaper</h2>
                 <p className='pt-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                 <button className='btn btn-danger p-3 rounded-0 mt-3 fw-semibold'>Learn More</button>
               </div>
            </div>
        </div>
    );
};

export default RightNav;