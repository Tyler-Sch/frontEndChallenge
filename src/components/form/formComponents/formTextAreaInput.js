import React, { useState, useEffect, useRef } from 'react';

export default function TextAreaInput(props) {
  // takes props.value and props.onchange for handling input text
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
      <textarea
        ref={ inputElement }
        className="form-control"
        value={ props.value }
        onChange={ e => props.onchange(e.target.value) }
        cols="30" rows="5" />
        <small
          className="text-danger float-right"
          style={{'display': hasText ? 'none' : 'inline'}}
        >
          { props.smallText }
        </small>

    </div>
  )
}
