import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({
  count,
  addOne,
  add100,
  increase,
}) => (
  <div className="Counter">
    <h1>
      Count:
      {' '}
      {count}
    </h1>
    <button
      type="button"
      onClick={addOne}
    >
      Add 1 count
    </button>
    <button
      type="button"
      onClick={add100}
    >
      Add 100 counts
    </button>
    <button
      type="button"
      onClick={increase}
    >
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
