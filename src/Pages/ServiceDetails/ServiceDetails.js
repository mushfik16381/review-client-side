import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './ServiceDetails.css'
import { AuthContext } from '../../Context/UserContext';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    const service = useLoaderData();

    let [reviewdata, setReviewdata] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
        .then((res) => res.json())
        .then((res) => setReviewdata(res));
    }, [reviewdata]);


    const {user} = useContext(AuthContext);
    console.log(user);
    const {_id, name, details, image_url,} = service;
    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const userName = user?.displayName || 'unregistered';
        const img_url = user?.photoURL || 'not found'
        const reviews = {
            service_id: _id,
            seviceName: name,
            message,
            userName,
            img_url
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                alert('Review added successfully');
                event.target.reset();
            }
        })
    }
    return (
        <div className='mt-5 mb-5'>
            <Container>
                <Row>
                    <Col lg="6">
                        <h3 className='name'>{name}</h3>
                        <p className='details'>{details}</p>
                    </Col>
                    <Col lg="6">
                    <PhotoProvider>
                        <PhotoView  src={image_url}>
                        <img className='img-fluid service_details_img' src={image_url} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                    </Col>
                    {/* <div className='btn-detail '>
                    <Link to={`/services/${_id}`}>
                    <button className='btn-enroll-detail'>Enroll Now</button></Link>
                    </div> */}
                    <div className='review_container'>
                        <h3>Here Riview</h3>
                        <form onSubmit={handleReview} >
                            <div >
                            {/* <input className='sub-email' name="message" type="text"  placeholder='text' /> */}
                            <textarea className='review_text'placeholder='Here Comment' name="message" id="" cols="45" rows="3"></textarea>
                            </div>
                            <div>
                            <button className='review_btn' type='submit'>Submit</button>
                            </div>
                        </form>
                        <div>
                            {
                                reviewdata.map(review => <Reviews
                                    review={review}
                                    key={review._id}
                                ></Reviews>)
                            }
                        </div>
                    </div>
                </Row>
                </Container>
        </div>
    );
};

export default ServiceDetails;