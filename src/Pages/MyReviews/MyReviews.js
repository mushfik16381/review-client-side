import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyReview from '../MyReview/MyReview';
import './MyReviews.css'

const MyReviews = () => {
    const my_reviews = useLoaderData()
    console.log(my_reviews)
    return (
        <div>
            {
                my_reviews?.map(my_rev => <MyReview
                    key={my_rev._id}
                    my_rev={my_rev}
                ></MyReview>)
            }
        </div>
    );
};

export default MyReviews;