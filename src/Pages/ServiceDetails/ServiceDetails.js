import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const service = useLoaderData();
    const {_id, name, details, image_url, price, rating} = service;
    return (
        <div className='mt-5 mb-5'>
            <Container>
                <Row>
                    <Col lg="6">
                        <h3 className='name'>{name}</h3>
                        {/* <div className='d-flex '>
                            <div className='info'>
                                <p className='cor'>Price: {price}</p>
                            </div>
                            <div className='info'>
                                <p className='cor'>Rating: {rating}</p>
                            </div>
                        </div> */}
                        <p className='details'>{details}</p>
                    </Col>
                    <Col lg="6">
                        <img className='img img-fluid' src={image_url} alt="" />
                    </Col>
                    <div className='btn-detail '>
                    <Link to={`/services/${_id}`}>
                    <button className='btn-enroll-detail'>Enroll Now</button></Link>
                    </div>
                </Row>
                </Container>
        </div>
    );
};

export default ServiceDetails;