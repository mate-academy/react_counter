import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ addOne, add100, increase, count }) => (
  <>
    <h1>{`Count: ${count}`}</h1>

    <button type="button" onClick={addOne}>
      Add one
    </button>

    <button type="button" onClick={add100}>
      Add hundred
    </button>

    <button type="button" onClick={increase}>
      Increase
    </button>
  </>
);

Counter.propTypes = {
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
