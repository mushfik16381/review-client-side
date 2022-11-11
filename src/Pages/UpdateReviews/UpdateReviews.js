import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UpdateReview from '../UpdateReview/UpdateReview';

const UpdateReviews = () => {
    const update_review = useLoaderData()
    console.log(update_review)
    return (
        <div>
            {
                update_review.map(up_review => <UpdateReview
                    up_review={up_review}
                    key={up_review._id}
                ></UpdateReview>)
            }
        </div>
    );
};

export default UpdateReviews;