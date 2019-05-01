import React from 'react';

export default function CheckBoxInput(props) {
  // simple checkbox input
  // needs props.checked and props.setChecked
  // also takes props.label for label text

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
