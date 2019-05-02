import React, { useState, useEffect } from 'react';

export default function SelectInput(props) {
  // props.options is a list of values to be used for drop down select
  // in form of [{'display_name': something, 'id': 'something'}]

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


  const options = props.options.map((op, idx) => (
    <option key={idx} value={ op.id }>{ op.display_name }</option>
  ));

  return (
    <div className="form-group">
      <select
        className="form-control"
        value={ props.value }
        onChange={ e => props.onchange(e.target.value) }
      >
        <option value="" disabled defaultValue>{ props.placeholder }</option>
        { options }
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
