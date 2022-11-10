import React, { useState } from 'react';

const AddService = () => {
    const [service, setService] = useState({})

    const handleAddUser = event =>{
        event.preventDefault();
        console.log(service)
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
                <button type='submit'>Add User</button>
            </form>
        </div>
    );
};

export default AddService;