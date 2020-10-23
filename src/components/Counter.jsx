import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ count, addOne, add100, increase }) => (
  <div className="count">
    <h1>
      Count:
      {count}
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
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
