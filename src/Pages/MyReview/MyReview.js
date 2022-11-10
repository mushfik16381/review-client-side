import React from 'react';
import Card from 'react-bootstrap/Card';

const MyReview = ({my_rev}) => {
    console.log(my_rev)
    
    const{userName, seviceName, message, service_id, img_url} = my_rev;
    
    return (
        <div>
            <div>
                <div>
                    <img style={{width:'80px'}} src={img_url} alt="" />
                </div>
                <div>
                    <h3>Food Name: {seviceName}</h3>
                    <h3>{message}</h3>
                </div>
            </div>
            
        </div>
    );
};

export default MyReview;