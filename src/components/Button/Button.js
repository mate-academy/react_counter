import React from 'react';
import propTypes from 'prop-types';

export function Button({ title, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
