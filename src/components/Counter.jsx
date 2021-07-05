import React from 'react';
import PropTypes from 'prop-types';

export function Counter({ currentCount, addOne, add100, increase }) {
  return (
    <>
      <h1 className="count-text">
        Count:
        {currentCount}
      </h1>
      <button
        type="button"
        onClick={addOne}
        className="button"
      >
        Add 1
      </button>
      <button
        type="button"
        onClick={add100}
        className="button"
      >
        Add 100
      </button>
      <button
        type="button"
        onClick={increase}
        className="button"
      >
        Increase
      </button>
    </>
  );
}

Counter.propTypes = {
  currentCount: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
