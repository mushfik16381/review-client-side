import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import MyReview from '../MyReview/MyReview';
import './MyReviews.css'

const MyReviews = () => {
    let {user} = useContext(AuthContext)
    const [myReviews, setmyReviews] = useState([]);
  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure to delete this ?");
    if (proceed) {
      fetch(`https://reviews-server.vercel.app/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = myReviews.filter((rev) => rev._id !== _id);
            setmyReviews(remaining);
          }
        });
    }
  };

  useEffect(() => {
    fetch(`https://reviews-server.vercel.app/myreviews/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setmyReviews(data));
  }, []);
    // const my_reviews = useLoaderData()
    // console.log(my_reviews)
    
    return (
        <div>
            {
                myReviews?.map(my_rev => <MyReview
                    key={my_rev._id}
                    my_rev={my_rev}
                    handleDelete={handleDelete}
                    
                >
                    
                </MyReview>)
            }
        </div>
    );
};

export default MyReviews;