import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

export const Counter = ({ count, addOne, addOneHundred, increase }) => (
  <>
    <h1>
      Count:
      {count}
    </h1>
    <button
      type="button"
      className="button"
      onClick={addOne}
    >
      AddOne
    </button>
    <button
      type="button"
      className="button"
      onClick={addOneHundred}
    >
      AddOneHundred
    </button>
    <button
      type="button"
      className="button"
      onClick={increase}
    >
      Increase
    </button>
  </>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  addOneHundred: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
