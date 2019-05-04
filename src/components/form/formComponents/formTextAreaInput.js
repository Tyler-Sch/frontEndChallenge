import React, { useState, useEffect } from 'react';

export default function TextAreaInput(props) {
  // takes props:
  // value -> value kept track of in parent,
  // onchange -> for handling change to value
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
      <textarea
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
