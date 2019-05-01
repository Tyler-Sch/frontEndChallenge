import React, { useState } from 'react';
import TextInput from './formComponents/formTextInput';
import SelectInput from './formComponents/formSelectInput';
import TextAreaInput from './formComponents/formTextAreaInput';
import CheckBoxInput from './formComponents/formCheckBoxInput';



export default function FormControl(props) {
  // keeps creates and keeps track of form inputs for uniteus
  // front end challenge

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [serviceTypesVal, setServiceTypeVal] = useState('');
  const [textArea, setTextArea] = useState('');
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const policyText = 'I hereby accept the terms of service for THE NETWORK'
                    + ' and the Privacy Policy';

  const submit = (e) => {
    e.preventDefault();
    console.log({firstName, lastName, emailAddress, serviceTypesVal});
  }

  return (
    <div className="container border">
      <h2>New Assistance Request</h2>
      <form className="mb-2" onSubmit={ submit }>
        <TextInput value={ firstName }
          onchange={ setFirstName }
          placeholder="First Name"
          type="text"
          smallText="required"
        />
      <TextInput value={ lastName }
          onchange={ setLastName }
          placeholder="Last Name"
          type="text"
          smallText="required"
        />
      <TextInput value={ emailAddress }
          onchange={ setEmailAddress }
          placeholder="Email Address"
          type="email"
          smallText="required"
        />
      <SelectInput
        options={ props.data }
        value={ serviceTypesVal }
        onchange={ setServiceTypeVal }
        placeholder="Select Service Type"
        smallText="required"
      />
      <TextAreaInput
        value={ textArea }
        onchange={ setTextArea }
      />
      <CheckBoxInput
        checked={ policyAccepted }
        setChecked={ setPolicyAccepted }
        label={ policyText }
      />
      <div className="d-flex flex-row-reverse">
        <button
          disabled={ !policyAccepted }
          type="submit"
          className="btn btn-primary">
            Get Assistance
        </button>
      </div>
     </form>
   </div>
  )
}
