import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../images/banner1.png'
import banner2 from '../../images/banner2.png'
import banner3 from '../../images/banner3.png'
import About from '../About/About';
import Subscribe from '../Subscribe/Subscribe';
import './Home.css'

const Home = () => {
    return (
        <div>
        <Carousel>
          <Carousel.Item className="slide">
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption className="slide-text">
            <p className='title'>Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="slide">
            <img className="d-block w-100" src={banner2} alt="Second slide" />
  
            <Carousel.Caption className="slide-text">
              <p className='title'>Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="slide">
            <img className="d-block w-100" src={banner3} alt="Third slide" />
  
            <Carousel.Caption className="slide-text">
            <p className='title'>Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <About></About>
        <Subscribe></Subscribe>
      </div>
    );
};

export default Home;