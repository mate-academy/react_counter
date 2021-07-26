import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ callback, text }) => (
  <button type="button" onClick={callback}>
    {text}
  </button>
);

export default React.memo(Button);

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
