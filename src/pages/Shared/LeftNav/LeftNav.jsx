/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const LeftNav = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='mt-5 position-sticky top-0'>
            <h4 className='mb-4'>All Catagories</h4>
            <div className='ps-4'>
                {
                    catagories.map(category =>
                        <p
                            key={category.id}
                        >
                            <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link>
                        </p>
                    )
                }
            </div>
            <Row xs={1} md={1} lg={1} className="g-4 mt-2">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                            <span className='me-3'>Sports</span><FaCalendarAlt className='me-2 text-secondary'></FaCalendarAlt> <span className='text-secondary'>Jan 4, 2022</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                            <span className='me-3'>Sports</span> <FaCalendarAlt className='me-2 text-secondary'></FaCalendarAlt> <span className='text-secondary'>Jan 4, 2022</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                            <span className='me-3'>Sports</span><FaCalendarAlt className='me-2 text-secondary'></FaCalendarAlt> <span className='text-secondary'>Jan 4, 2022</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LeftNav;