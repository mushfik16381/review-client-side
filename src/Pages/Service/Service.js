import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {_id, name, details, image_url, price, rating} = service;
    let detail = details.slice(0, 178);
    return (
        <div>
            <Card className='card-container'>
                <img className='img-container' src={image_url} alt="" />
                <Card.Body>
                    <Card.Title className='card_text'>
                        <h3>{name}</h3>
                    </Card.Title>
                    <Card.Text>
                        <span>
                            {detail}.. <Link to={`${_id}`}>Read More</Link>
                        </span>
                    </Card.Text>
                    <div className='d-flex justify-content-between card-details'>
                        <div>
                            <p className='cor'>Price: {price}</p>
                        </div>
                        <div>
                            <p className='cor'>Rating: {rating}</p>
                        </div>
                    </div>
                    <div className='btn-enroll'>
                    <Link to='/checkout'><button className='btn-enroll-detail'>Read More</button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;