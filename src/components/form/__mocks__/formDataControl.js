import React from 'react';

export default function FormDataControl(props) {
  const mockMakeUser = () => {
    console.log('trying to create mock user');
    const fake_data = {
      'assistance_request': {
        'contact':{
          'first_name': 'testFirst',
          'last_name': 'testLast',
          'email': 'testEmailAddress'
        },
        'service_type': 'test service',
        'description': 'i wrote stuff'
      }
    }
    props.processPostRequest(fake_data);
  }

  return (
    <div>
      <h1>In a mock function!</h1>
      <button onClick={(e) => mockMakeUser()}>make user</button>
    </div>
  )
}
