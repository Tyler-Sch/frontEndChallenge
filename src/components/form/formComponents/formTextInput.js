import React, { useState, useEffect } from 'react';


export default function TextInput(props) {
  // takes props: type -> ie: email, password, text,
  //  value -> state passed down from parent,
  // onchange -> function to modify value to new value,
  // placholder -> placeholder text in input,
  // smallText -> small text to right of input 
  const [hasText, setHasText] = useState(false);

  useEffect(() => {
    // check if element has input
    if (props.value.length > 0) {
      setHasText(true);
    }
    else if (props.value.length === 0) {
      setHasText(false);
    }
  },[props.value])

  return (
    <div className="form-group">
        <input
          className="form-control"
          type={ props.type }
          value={ props.value }
          onChange={ (e) => props.onchange(e.target.value) }
          placeholder={ props.placeholder }
        />
      <small
        className="text-danger float-right"
        style={{'display': hasText ? 'none' : 'inline'}}
      >
          { props.smallText }
      </small>
    </div>
  )
}
