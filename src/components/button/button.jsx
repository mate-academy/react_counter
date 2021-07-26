import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ callback, text }) => (
  <button
    type="button"
    className="button"
    onClick={callback}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
