/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {

    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
            </div>
            <div style={{ backgroundColor: "#F3F3F3", padding: "15px" }} className='d-flex mb-4 mt-5'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-secondary' speed={100}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;