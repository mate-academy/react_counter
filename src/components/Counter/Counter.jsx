import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ addOne, add100, increase, number }) => (
  <div>
    <h1>
      Count:
      {' '}
      {number}
    </h1>

    <button type="button" onClick={addOne}>
      Add one
    </button>

    <button type="button" onClick={add100}>
      Add 100
    </button>

    <button type="button" onClick={increase}>
      Increase
    </button>
  </div>
);

Counter.propTypes = {
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
};
