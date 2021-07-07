import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ clickHandler, text }) => (
  <button
    className="button is-success"
    type="button"
    onClick={clickHandler}
  >
    {text}
  </button>
);

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
