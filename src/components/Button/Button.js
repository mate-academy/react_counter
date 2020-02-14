import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => (
  <button
    onClick={() => (props.sign === '+'
      ? props.updateCount(1)
      : props.updateCount(-1))}
    className="button"
    type="button"
  >
    {props.sign}
  </button>
);

Button.propTypes = {
  sign: PropTypes.string.isRequired,
  updateCount: PropTypes.func.isRequired,
};
