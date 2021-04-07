import React from 'react';
import Proptypes from 'prop-types';

export const Counter = ({ count, addOne, add100, increase }) => (
  <>
    <h1>
      Count:&nbsp;
      {count}
    </h1>
    <button
      type="button"
      onClick={addOne}
    >
      Add One
    </button>
    <button
      type="button"
      onClick={add100}
    >
      Add 100
    </button>
    <button
      type="button"
      onClick={increase}
    >
      Increase
    </button>
  </>
);

Counter.propTypes = {
  count: Proptypes.number.isRequired,
  addOne: Proptypes.func.isRequired,
  add100: Proptypes.func.isRequired,
  increase: Proptypes.func.isRequired,
};
