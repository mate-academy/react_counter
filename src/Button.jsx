import React from 'react';

export const Button = props => (
  <div className="button__wrapper">
    <button
      className="button"
      type="button"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  </div>
);

export default Button;
