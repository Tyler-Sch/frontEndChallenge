import React from 'react';

export default function Success(props) {
    const { service_type, contact } = props.assistance_request;

    const saveItem = () => {
        localStorage.setItem(
            contact.email,
            JSON.stringify({
                'firstName': contact.first_name,
                'lastName': contact.last_name,
                'serviceType': service_type,
            })
        )
    }

    saveItem();


    return (
        <div className='container'>
            <h1>Success!!!</h1>
            <p>Hi { contact.first_name } { contact.last_name }</p>
            <p>Your request for {service_type} was successfully completed.</p>
            <button onClick={props.back}>Go Back</button>
        </div>
    )
}
