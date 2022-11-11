import React from 'react';
import { Link } from 'react-router-dom';
import './MyReview.css'

const MyReview = ({my_rev, handleDelete}) => {
    const{userName, seviceName, message, service_id, img_url, _id } = my_rev;
    return (
        <div className='d-flex'>
            <div className='review_containers'>
                <div>
                    <img className='review_img' src={img_url} alt="" />
                    <span>{userName}</span>
                </div>
                <div>
                    <h2>{message}</h2>
                    
                </div>
                <div className='my_review_btn'>
                <Link to={`/update-review/${_id}`}><button  className='edit_btn'>Edit</button></Link>
                <button onClick={() => handleDelete(_id)} className='dlt_btn'>Delete</button>
                </div>
            </div>
                
        </div>
    );
};

export default MyReview;