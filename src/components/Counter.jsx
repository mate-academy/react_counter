import React from 'react';
import propTypes from 'prop-types';
import './Counter.scss';

export const Counter = ({ count, add100, addOne, increase }) => (
  <div className="app">
    <h1 className="app__heading">
      {`Count: ${count}`}
    </h1>

    <button
      className="app__button"
      type="button"
      onClick={addOne}
    >
      Add 1
    </button>
    <button
      className="app__button"
      type="button"
      onClick={add100}
    >
      Add 100
    </button>
    <button
      className="app__button"
      type="button"
      onClick={increase}
    >
      Increase
    </button>
  </div>
);

Counter.propTypes = {
  count: propTypes.number.isRequired,
  addOne: propTypes.func.isRequired,
  add100: propTypes.func.isRequired,
  increase: propTypes.func.isRequired,
};
