import React from 'react';

function Row(props) {
  return (
    <div className="row">
      <label>{props.label}</label>
      {props.children}
    </div>
  );
}

export default Row;
