import React, { useState } from 'react';
import TextInput from './formComponents/formTextInput';
import SelectInput from './formComponents/formSelectInput';
import TextAreaInput from './formComponents/formTextAreaInput';

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
      <SelectInput options={ sampleData.data }
        onchange={ setServiceTypeVal }
        placeholder="Select Service Type"
      />
      <TextAreaInput
        value={ textArea }
        onchange={ setTextArea }
      />
     </form>
   </div>
  )
}
