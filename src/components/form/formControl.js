import React, { useState } from 'react';
import TextInput from './formComponents/formTextInput';

export default function FormControl() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  return (
    <div className="container">

      <form>
        <TextInput value={ firstName }
          onchange={ setFirstName }
          placeholder='First Name'
          type="text"
        />
      <TextInput value={ lastName }
          onchange={ setLastName }
          placeholder='Last Name'
          type="text"
        />
      <TextInput value={ emailAddress }
          onchange={ setEmailAddress }
          placeholder='Email Address'
          type="email"
        />
      </form>
    </div>
  )
}
