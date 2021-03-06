import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ value, addOne, increase, add100 }) => (
  <>
    <h1>
      Count:
      {' '}
      {value}
    </h1>
    <button type="button" onClick={addOne}>
      addOne
    </button>
    <button type="button" onClick={add100}>
      add100
    </button>
    <button type="button" onClick={increase}>
      increase
    </button>
  </>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
};
