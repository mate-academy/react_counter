import React from 'react';
import PropTypes from 'prop-types';

import './Counter.scss';

export const Counter = ({
  addOne,
  add100,
  increase,
  count,
}) => (
  <div className="counter">
    <h1 className="counter__title">
      Count:
      {' '}
      <span className="counter__count">
        {count}
      </span>
    </h1>
    <div className="counter__buttons">
      <button
        className="counter__btn"
        type="button"
        onClick={() => {
          addOne();
        }}
      >
        Add 1
      </button>

      <button
        className="counter__btn"
        type="button"
        onClick={() => {
          add100();
        }}
      >
        Add 100
      </button>

      <button
        className="counter__btn"
        type="button"
        onClick={() => {
          increase();
        }}
      >
        Increase
      </button>
    </div>
  </div>
);

Counter.propTypes = {
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
