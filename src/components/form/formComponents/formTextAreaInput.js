import React from 'react';
import useHasText from './requiredHook';

export default function TextAreaInput(props) {
  // takes props:
  // value -> value kept track of in parent,
  // onchange -> for handling change to value
  // smallText -> small text to right of input
  const hasText = useHasText(props.value);

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
