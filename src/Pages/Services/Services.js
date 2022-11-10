import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    let title = "Squid Food -Services";
    document.title = title;
    const services = useLoaderData();
    console.log(services)
    return (
        <div className='service-container'>
            {
                            services?.map(service => <Service
                                key={service._id}
                            service={service}
                            ></Service>)
                        }
        </div>
    );
};

export default Services;