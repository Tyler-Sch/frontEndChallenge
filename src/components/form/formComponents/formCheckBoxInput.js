import React from 'react';

export default function CheckBoxInput(props) {
  return (
    <div className="form-group">
      <input
        type="checkbox"
        checked={ props.checked }
        onChange={ e => props.setChecked(!props.checked) }
      />
    <label className="ml-2"> { props.label }</label>
    </div>
  )
}
