import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ counter, handleClick }) => (
  <div>
    <h1>
      Count:
      {counter}
    </h1>
    <button
      type="button"
      onClick={handleClick}
    >
      Start
    </button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
