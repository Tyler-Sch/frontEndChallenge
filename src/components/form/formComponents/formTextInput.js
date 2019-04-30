import React from 'react';


export default function TextInput(props) {
  return (
    <div className="form-group">
        <input
          className="form-control"
          type={ props.type }
          value={ props.value }
          onChange={ (e) => props.onchange(e.target.value) }
          placeholder={ props.placeholder }
        />
      <small className="text-danger float-right">{ props.smallText }</small>
    </div>
  )
}
