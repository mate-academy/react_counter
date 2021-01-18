import React from 'react';
import propTypes from 'prop-types';

export const Counter = (props) => {
  const { count, addOne, add100, increase } = props;

  return (
    <>
      <h1>
        Count:
        {` ${count}`}
      </h1>

      <button
        type="button"
        className="button--one"
        onClick={addOne}
      >
        Add 1
      </button>

      <button
        type="button"
        className="button--one-hundred"
        onClick={add100}
      >
        Add 100
      </button>

      <button
        type="button"
        className="button--divisible"
        onClick={increase}
      >
        Increase
      </button>
    </>
  );
};

Counter.propTypes = {
  count: propTypes.number.isRequired,
  addOne: propTypes.func.isRequired,
  add100: propTypes.func.isRequired,
  increase: propTypes.func.isRequired,
};
