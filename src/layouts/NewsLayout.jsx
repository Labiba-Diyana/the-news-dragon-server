/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import moment from 'moment/moment';
import logo from '../assets/logo.png';

const NewsLayout = () => {
    return (
        <div>
            <Container className='mt-4'>
                <div className="text-center">
                    <img src={logo} alt="" />
                    <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                    <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
                </div>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;