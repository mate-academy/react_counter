import React from 'react';
import './Counter.scss';
import PropTypes from 'prop-types';

export const Counter = ({ counter, addOne, add100, increase }) => (
  <>
    <h1>
      Count:
      {' '}
      {counter}
    </h1>
    <button
      type="button"
      onClick={addOne}
    >
      Add one
    </button>
    <button
      type="button"
      onClick={add100}
    >
      Add 100
    </button>
    <button
      type="button"
      onClick={increase}
    >
      Increase
    </button>
  </>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
