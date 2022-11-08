import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../images/banner1.png'
import banner2 from '../../images/banner2.png'
import banner3 from '../../images/banner3.png'
import './Home.css'

const Home = () => {
    return (
        <div>
        <Carousel>
          <Carousel.Item className="slide">
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption className="slide-text">
              <h3>Study Buzz</h3>
              <p>
                The authority of those who teach is often an obstacle to those who
                want to learn.
              </p>
              <p>― Marcus Tullius Cicero</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="slide">
            <img className="d-block w-100" src={banner2} alt="Second slide" />
  
            <Carousel.Caption className="slide-text">
              <h3>Study Buzz</h3>
              <p>You can't study the darkness by flooding it with light.</p>
              <p>― Edward Abbey,</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="slide">
            <img className="d-block w-100" src={banner3} alt="Third slide" />
  
            <Carousel.Caption className="slide-text">
              <h3>Study Buzz</h3>
              <p>
                The ink of the scholar is more holy than the blood of the martyr.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Home;