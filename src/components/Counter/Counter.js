import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ count, addOne, add100, increase }) => (
  <>
    <h1>{`Count: ${count}`}</h1>
    <button onClick={addOne} type="button">
      addOne
    </button>

    <button onClick={add100} type="button">
      add100
    </button>

    <button onClick={increase} type="button">
      increase
    </button>
  </>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired,
  add100: PropTypes.func.isRequired,
  increase: PropTypes.func.isRequired,
};
