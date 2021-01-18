import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ addOne, add100, increase, number }) => (
  <div className="container">
    <h1 className="title">
      Count:
      {number}
    </h1>

    <button type="button" onClick={addOne} className="button">
      Add one
    </button>
    <button type="button" onClick={add100} className="button">
      Add 100
    </button>
    <button type="button" onClick={increase} className="button">
      Increase
    </button>
  </div>
);

Counter.propTypes = {
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
};
