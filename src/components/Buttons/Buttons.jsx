import React from 'react';
import { counterPropTypes } from '../counterPropTypes';
import './Button.scss';

const Button = ({ name, onCLick }) => (
  <button
    className="button"
    type="button"
    onClick={onCLick}
  >
    {name}
  </button>
);

Button.propTypes = counterPropTypes;

export default Button;
