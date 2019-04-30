import React, { useState } from 'react';
import TextInput from './formComponents/formTextInput';
import SelectInput from './formComponents/formSelectInput';
import TextAreaInput from './formComponents/formTextAreaInput';
import CheckBoxInput from './formComponents/formCheckBoxInput';

const sampleData = {
    "data": [
        {
            "display_name": "Benefits",
            "id": "benefits"
        },
        {
            "display_name": "Employment",
            "id": "employment"
        },
        {
            "display_name": "Healthcare",
            "id": "healthcare"
        },
        {
            "display_name": "Housing",
            "id": "housing"
        },
        {
            "display_name": "Legal",
            "id": "legal"
        }
    ]
}

export default function FormControl() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [serviceTypesVal, setServiceTypeVal] = useState('');
  const [textArea, setTextArea] = useState('');
  const [policyAccepted, setPolicyAccepted] = useState(false);

  const policyText = 'I hereby accept the terms of service for THE NETWORK'
                    + ' and the Privacy Policy';

  return (
    <div className="container border">
      <h2>New Assistance Request</h2>
      <form className="mb-2">
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
      <SelectInput options={ sampleData.data }
        onchange={ setServiceTypeVal }
        placeholder="Select Service Type"
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
