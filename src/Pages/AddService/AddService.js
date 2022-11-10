import React, { useState } from 'react';
import './AddService.css'

const AddService = () => {
    let title = "Squid Food -Add Service";
   document.title = title;
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
        <div className='add_service_container'>
            <h3 className='add_title'>Here Service are Added</h3>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name='name' placeholder='Service Name' required/>
                <br />
                <input onBlur={handleInputBlur} type="text" name='price' placeholder='Service Fee' required/>
                <br />
                <input onBlur={handleInputBlur} type="text" name='rating' placeholder='Rating' required/>
                <br />
                <input onBlur={handleInputBlur} type="text" name='image_url' placeholder='Image Url' required/>
                <br />
                <textarea onBlur={handleInputBlur} placeholder='Service Details' name="details" id="" cols="30" rows="5"></textarea>
                <br />
                <button className='add_service_btn' type='submit'>Add Service</button>
            </form>
        </div>
    );
};

export default AddService;



