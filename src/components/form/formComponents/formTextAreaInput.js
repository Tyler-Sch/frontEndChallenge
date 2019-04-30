import React from 'react';

export default function TextAreaInput(props) {

  return (
    <div className="form-group">
      <textarea
        className="form-control"
        value={ props.value }
        onChange={ e => props.onchange(e.target.value) }
        cols="30" rows="5" />
    </div>
  )
}
