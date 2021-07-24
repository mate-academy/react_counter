import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ text, onClick, color }) => (
  <button
    type="button"
    onClick={onClick}
    className={`button ${color} m-2`}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
