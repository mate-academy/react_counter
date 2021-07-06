import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ counter, addOne, add100, increase }) => (
  <div className="counter">
    <h1 className="counter__heading">{`Count: ${counter}`}</h1>
    <div className="counter__buttons">
      <button
        onClick={addOne}
        type="button"
      >
        Add one
      </button>
      <button
        onClick={add100}
        type="button"
      >
        Add one hundred
      </button>
      <button
        onClick={increase}
        type="button"
      >
        Increase
      </button>
    </div>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
