import React from 'react';
import useHasText from './requiredHook';

export default function SelectInput(props) {
  // send props.children as a series of <option></option>
  // takes props:
  // value -> from parent,
  // onchange -> function to modify value to new value,
  // placholder -> placeholder text in input,
  // smallText -> small text to right of input

  const hasText = useHasText(props.value);

  return (
    <div className="form-group">
      <select
        className="form-control"
        value={ props.value }
        onChange={ e => props.onchange(e.target.value) }
      >
        <option value="" disabled defaultValue>
            { props.placeholder }
        </option>
        { props.children }
      </select>
      <small
        className="text-danger float-right"
        style={{'display': hasText ? 'none' : 'inline'}}
      >
        { props.smallText }
      </small>
    </div>
  )
}
