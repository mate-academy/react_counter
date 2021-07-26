import React from 'react';
import propTypes from 'prop-types';
import './counter.scss';

export const Counter = ({
  count,
  increase,
  addOne,
  addHundred,
}) => (
  <div className="Counter">
    <h1 className="Counter__title">
      Count:
      {' '}
      {count}
    </h1>
    <div className="Counter__button-wrap">
      <button
        type="button"
        onClick={addOne}
        className="btn btn-danger"
      >
        addOne
      </button>

      <button
        type="button"
        onClick={addHundred}
        className="btn btn-warning"
      >
        add100
      </button>

      <button
        type="button"
        onClick={increase}
        className="btn btn-success"
      >
        inscrease
      </button>
    </div>
  </div>
);

Counter.propTypes = {
  count: propTypes.number.isRequired,
  increase: propTypes.func.isRequired,
  addOne: propTypes.func.isRequired,
  addHundred: propTypes.func.isRequired,
};
