import React from 'react';
import { counterPropTypes } from '../counterPropTypes';

const Button = ({ add100, addOne, increase }) => (
  <>
    <button
      className="calculate__add-one"
      onClick={addOne}
      type="button"
    >
      Add 1
    </button>
    <button
      className="calculate__add-one_hundred"
      onClick={add100}
      type="button"
    >
      Add 100
    </button>
    <button
      className="calculate__add-increase"
      onClick={increase}
      type="button"
    >
      Increase
    </button>
  </>
);

Button.propTypes = counterPropTypes;

export default Button;
