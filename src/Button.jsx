import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onclick, textContent }) => (
  <button
    type="button"
    className="button is-light is-rounded is-blue"
    onClick={onclick}
  >
    {textContent}
  </button>
);

Button.propTypes = {
  onclick: PropTypes.func.isRequired,
  textContent: PropTypes.string.isRequired,
};
