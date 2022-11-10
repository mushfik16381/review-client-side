import React from 'react';
import Card from 'react-bootstrap/Card';

const Reviews = ({review}) => {
    const{userName, seviceName, message, service_id, img_url} = review;
    return (
        <div className='d-flex '>
            <Card >
      <Card.Img className='d-flex' style={{width:'50px'}} variant="top" src={img_url} />
      <Card.Body>
        <Card.Title>{seviceName}</Card.Title>
        <Card.Text> {message}
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Reviews;