import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
import logo from '../../images/about.png'

const About = () => {
    return (
        <div className='about-container'>
            
            <Row>
                <Col lg='6'>
                    <h2 className='about-title'>About food</h2>
                    <p className='about-text'>Quick and easy fast food recipes for you. There is no universal thumb rule which defines Indian food. The street food available in major cities will have a few common delicacies. The best part about street food is that one can enjoy it without any inhibitions.</p>
                    <p className='about-text'>An independent fast food blog and your guide to fast food reviews, restaurant locations, menus, reviews, and nutrition information for over 80 fast food chains throughout the United States and around the world.</p>
                </Col>
                <Col lg='6'>
                    <img className='about-img img-fluid' src={logo} alt="" srcset="" />
                </Col>
            </Row>
        </div>
    );
};

export default About;