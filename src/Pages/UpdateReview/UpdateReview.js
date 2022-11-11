import React, { useState } from 'react';

const UpdateReview = ({up_review}) => {
    const{message ,_id} = up_review
    const [update, setUpdate] = useState(up_review);

  const handleUpdate = (event) => {
    event.preventDefault();
    fetch(`https://reviews-server.vercel.app/review/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Reviews updated successfully");
        }
      });
  };

  const handleOnchange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...update };
    // console.log(newReview);
    newReview[field] = value;
    setUpdate(newReview);
  };
    return (
        <div className='mt-5 mb-5'>
            {/* <form onSubmit={handleUpdate}>
                <input onChange={handleOnchange} type="text" name='message' defaultValue={message} />
            <button type='submit'>Send</button>
            </form> */}

            <h3>Update Review</h3>
                        <form onSubmit={handleUpdate} >
                            <div >
                            <textarea onChange={handleOnchange} className='review_text' defaultValue={message} name="message" id="" cols="45" rows="3"></textarea>
                            </div>
                            <div>
                            <button className='review_btn' type='submit'>Submit</button>
                            </div>
                        </form>
        </div>
    );
};

export default UpdateReview;