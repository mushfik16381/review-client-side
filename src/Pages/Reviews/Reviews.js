import React from 'react';
import './Review.css'

const Reviews = ({review}) => {
    const{userName, seviceName, message, service_id, img_url} = review;
    return (
        <div>
            <div className='review_containers'>
                <div>
                    <img className='review_img' src={img_url} alt="" />
                    <span className='ps-1'>{userName}</span>
                </div>
                <div>
                    <h2>{message}</h2>
                </div>
            </div>
        </div>
    );
};

export default Reviews;