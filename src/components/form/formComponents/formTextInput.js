import React from 'react';
import useHasText from './requiredHook';

export default function TextInput(props) {
  const hasText = useHasText(props.value);

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
