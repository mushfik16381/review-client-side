import React, { useState } from 'react';
import './AddService.css'

const AddService = () => {
    const [service, setService] = useState({})

    const handleAddUser = event =>{
        event.preventDefault();
        console.log(service)
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('User added successfully');
                event.target.reset();
            }
        })
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newService = {...service}
        newService[field] = value;
        setService(newService)
    }
    return (
        <div>
            <h3>AddService</h3>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name='name' placeholder='name' required/>
                <br />
                <input onBlur={handleInputBlur} type="text" name='price' placeholder='price' required/>
                <br />
                <input onBlur={handleInputBlur} type="text" name='rating' placeholder='rating' required/>
                <br />
                <input onBlur={handleInputBlur} type="text" name='image_url' placeholder='imd_address' required/>
                <br />
                {/* <input className='text_area' onBlur={handleInputBlur} type="textarea" name='details' placeholder='details' required/>
                <br /> */}
                <textarea onBlur={handleInputBlur} name="details" id="" cols="30" rows="5"></textarea>
                <button type='submit'>Add User</button>
            </form>
        </div>
    );
};

export default AddService;



