import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ clickHandler, text }) => (
  <button type="button" onClick={clickHandler}>
    {text}
  </button>
);

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
