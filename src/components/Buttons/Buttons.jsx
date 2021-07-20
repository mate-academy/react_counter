import React from 'react';
import { counterPropTypes } from '../counterPropTypes';
import './Button.scss';

const Button = ({ name, callback }) => (
  <button
    className="button"
    type="button"
    onClick={callback}
  >
    {name}
  </button>
);

Button.propTypes = counterPropTypes;

export default Button;
