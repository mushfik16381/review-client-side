import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe-container'>
            <h3 className='stay'>Stay Informed About Special Offers</h3>
            <h4 className='for'>For Exclusive Deals, Coupons, News and More!</h4>
            <div>
                <input className='sub-email' type="email" placeholder='Enter Your Email'/>
                <button className='sub-btn'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;