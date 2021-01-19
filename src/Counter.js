import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ addOne, add100, increase, currentNumber }) => (
  <>
    <h1>
      Count:
      {currentNumber}
    </h1>
    <button type="button" onClick={addOne}>Add 1</button>
    <button type="button" onClick={add100}>Add 100</button>
    <button type="button" onClick={increase}>Add 100 IF</button>
  </>
);

Counter.propTypes = {
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
  currentNumber: PropTypes.number.isRequired,
};
