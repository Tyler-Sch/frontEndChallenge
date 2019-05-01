import React, { useState, useEffect, useRef } from 'react';


export default function TextInput(props) {
  const [hasText, setHasText] = useState(false);
  const inputElement = useRef(null);

  useEffect(() => {
    // check if element has input
    if (inputElement.current.value.length > 0) {
      setHasText(true);
    }
    else if (inputElement.current.value.length === 0) {
      setHasText(false);
    }
  },[props.value])

  return (
    <div className="form-group">
        <input
          ref={ inputElement }
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
