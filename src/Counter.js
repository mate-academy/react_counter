import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ count, handleClick }) => (
  <div>
    <h1>
      Count:
      {count}
    </h1>
    <button
      type="button"
      onClick={handleClick}
    >
+
    </button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
