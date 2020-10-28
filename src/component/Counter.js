import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ num, addOne, add100, increase }) => (
  <main>
    <h1>
      {`Count: ${num}`}
    </h1>
    <button
      type="button"
      onClick={addOne}
    >
      Add 1
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
  </main>
);

Counter.propTypes = {
  num: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
