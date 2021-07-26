import React from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

export const Counter = ({ count, add100, addOne, increase }) => (
  <>
    <h1>{`Count: ${count}`}</h1>
    <div className="button-container">
      <button
        className="button button--one"
        type="button"
        onClick={addOne}
      >
        add one
      </button>
      <button
        type="button"
        onClick={add100}
        className="button button--hundred"
      >
        add 100
      </button>
      <button
        type="button"
        onClick={increase}
        className="button button--increase"
      >
        increase
      </button>
    </div>

  </>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
