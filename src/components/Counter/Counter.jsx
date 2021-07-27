import React from 'react';
import './Counter.scss';
import PropTypes from 'prop-types';

export const Counter = (
  { count, addOne, add100, increase },
) => (
  <div>
    <h1 className="counter-title">
      Count:
      {count}
    </h1>
    <button
      type="button"
      onClick={addOne}
      className="btn btn-outline-primary"
    >
      add One
    </button>
    <button
      className="btn btn-outline-primary"
      type="button"
      onClick={add100}
    >
      add 100
    </button>
    <button
      className="btn btn-outline-primary"
      type="button"
      onClick={increase}
    >
      Surprise
    </button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
